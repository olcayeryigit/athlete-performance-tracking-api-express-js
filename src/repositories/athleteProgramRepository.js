const { AthleteProgram, Workout, sequelize } = require("../models");

class AthleteProgramRepository {
  async create(data) {
    return await AthleteProgram.create(data);
  }

  async findStatsByAthlete(athleteId) {
    return await AthleteProgram.findAll({
      where: { athlete_id: athleteId },
      include: [{ model: Workout, through: { attributes: [] } }],
      attributes: [
        [
          sequelize.fn("SUM", sequelize.col("Workouts.duration")),
          "total_duration",
        ],
        [
          sequelize.fn("SUM", sequelize.col("Workouts.calories_burned")),
          "total_calories",
        ],
      ],
    });
  }

  async findProgressByAthlete(athleteId) {
    return await AthleteProgram.findAll({
      where: { athlete_id: athleteId },
      attributes: ["status", [sequelize.fn("COUNT", "id"), "count"]],
      group: ["status"],
    });
  }

  async findTeamStats(coachId) {
    return await AthleteProgram.findAll({
      include: [
        {
          model: require("../models/TrainingProgram"),
          where: { coach_id: coachId },
        },
        { model: Workout },
      ],
      attributes: [
        "athlete_id",
        [
          sequelize.fn("SUM", sequelize.col("Workouts.duration")),
          "total_duration",
        ],
        [
          sequelize.fn("SUM", sequelize.col("Workouts.calories_burned")),
          "total_calories",
        ],
      ],
      group: ["athlete_id"],
    });
  }
}

module.exports = new AthleteProgramRepository();
