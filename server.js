const express = require("express");
const { checkDatabaseConnection } = require("./src/config/database");
const app = express();
const port = 3000;

// Veritabanı bağlantısını kontrol etme
checkDatabaseConnection();

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
