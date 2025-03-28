const { Sequelize } = require("sequelize");
require("dotenv").config();

// Sequelize bağlantısı
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

// Veritabanı bağlantısını kontrol etmek için bir fonksiyon
const checkDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Veritabanı bağlantısı başarılı.");
  } catch (error) {
    console.error("Veritabanı bağlantısı hatası:", error);
  }
};

module.exports = { sequelize, checkDatabaseConnection };
