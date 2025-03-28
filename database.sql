-- Veritabanı oluşturma
CREATE DATABASE IF NOT EXISTS athlete_performance_db;

USE athlete_performance_db;

--TABLOLAR
--Kullanıcılar
CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL, 
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(250) NOT NULL,
    role ENUM("coach","athlete","admin"),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
--Antrenman Programları
CREATE TABLE training_programs(
id INT AUTO_INCREMENT PRIMARY KEY,
coach_id INT NOT NULL,
title VARCHAR(250) NOT NULL,
description TEXT,
start_date NOT NULL,
end_date NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE 
--antrenörid si için users tablosu referans alındı, 
--users tablosunda bir id silinirse, o id'yi coach_id olarak referans alan tüm satırlar otomatik olarak silinir
);


-- Egzersizler
CREATE TABLE workouts(
id INT AUTO_INCREMENT PRIMARY KEY,
program_id INT NOT NULL,
name VARCHAR(250) NOT NULL,
duration INT NOT NULL,--dakika
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (program_id) REFERENCES training_programs(id) ON DELETE CASCADE
--programid si için training_programs tablosu referans alındı, 
--training_programs tablosunda bir id silinirse, o id'yi program_id olarak referans alan tüm satırlar otomatik olarak silinir
);



--Sporcu ve Program İlişkisellik Tablosu
CREATE TABLE athlete_programs(
id INT AUTO_INCREMENT PRIMARY_KEY,
athlete_id INT NOT NULL,

);



--Feedbacks
CREATE TABLE feedbacks(
    id INT AUTO_INCREMENT PRIMARY KEY,
    athlete_id INT NOT NULL,
    program_id INT NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (athlete_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (program_id) REFERENCES training_programs(id) ON DELETE CASCADE
);