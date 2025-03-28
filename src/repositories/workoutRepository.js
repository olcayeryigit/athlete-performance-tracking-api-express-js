const { Workout } = require("../models");

class WorkoutRepository {
  async createBulk(workouts) {
    return await Workout.bulkCreate(workouts);
  }

  async deleteByProgramId(programId) {
    return await Workout.destroy({ where: { program_id: programId } });
  }
}

module.exports = new WorkoutRepository();
