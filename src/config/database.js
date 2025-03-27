const { Sequelize } = require("sequelize");

// Sequelize ile veritabanı bağlantısı
const sequelize = new Sequelize("athlete_performance_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // SQL sorgularının konsola yazdırılmaması
});

// Veritabanı bağlantısını kontrol etme
async function checkDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Veritabanı bağlantısı başarılı.");
  } catch (err) {
    console.error("Veritabanı bağlantısı hatası:", err);
  }
}

module.exports = { sequelize, checkDatabaseConnection };
