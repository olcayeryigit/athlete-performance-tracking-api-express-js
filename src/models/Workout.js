const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const TrainingProgram = require("./TrainingProgram");

const Workout = sequelize.define("Workout", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  program_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TrainingProgram,
      key: "id",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  calories_burned: {
    type: DataTypes.INTEGER,
  },
});

TrainingProgram.hasMany(Workout, { foreignKey: "program_id" });
//TrainingProgram.hasMany(Workout): Bir antrenman programı birden fazla egzersiz içerebilir.
Workout.belongsTo(TrainingProgram, { foreignKey: "program_id" });
//Her egzersiz yalnızca bir antrenman programına aittir.
module.exports = Workout;
