const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const TrainingProgram = require("./TrainingProgram");

const AthleteProgram = sequelize.define("AthleteProgram", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  athlete_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  program_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TrainingProgram,
      key: "id",
    },
  },
  status: {
    type: DataTypes.ENUM("assigned", "in_progress", "completed"),
    defaultValue: "assigned",
  },
});

User.hasMany(AthleteProgram, { foreignKey: "athlete_id" });
//Bir kullanıcı birden fazla AthleteProgram kaydına sahip olabilir.
TrainingProgram.hasMany(AthleteProgram, { foreignKey: "program_id" });
//Bir TrainingProgramı  birden fazla AthleteProgram kaydına sahip olabilir.
AthleteProgram.belongsTo(User, { foreignKey: "athlete_id" });
//Her AthleteProgram kaydı bir kullanıcıya aittir.
AthleteProgram.belongsTo(TrainingProgram, { foreignKey: "program_id" });
//Her AthleteProgram kaydı bir TrainingProgram aittir.
module.exports = AthleteProgram;
