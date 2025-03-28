const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const TrainingProgram = sequelize.define("TrainingProgram", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  coach_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  start_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

User.hasMany(TrainingProgram, { foreignKey: "coach_id" });
//Bir kullanıcı birden fazla TrainingProgram'a sahip olabilir.
TrainingProgram.belongsTo(User, { foreignKey: "coach_id" });
//Her TrainingProgram yalnızca bir User (Antrenor) ile ilişkilidir.
module.exports = TrainingProgram;
