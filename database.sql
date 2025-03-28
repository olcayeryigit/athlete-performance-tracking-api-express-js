-- Veritabanı oluşturma
--TABLOLAR

CREATE DATABASE athlete_performance_db;
USE athlete_performance_db;

--Kullanıcılar
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('coach', 'athlete', 'admin') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Antrenman Programları
CREATE TABLE training_programs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    coach_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (coach_id) REFERENCES users(id) ON DELETE CASCADE
--antrenörid si için users tablosu referans alındı, 
--users tablosunda bir id silinirse, o id'yi coach_id olarak referans alan tüm satırlar otomatik olarak silinir

);

-- Egzersizler
CREATE TABLE workouts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    program_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    calories_burned INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (program_id) REFERENCES training_programs(id) ON DELETE CASCADE
--programid si için training_programs tablosu referans alındı, 
--training_programs tablosunda bir id silinirse, o id'yi program_id olarak referans alan tüm satırlar otomatik olarak silinir
);


--Sporcu ve Program İlişkisellik Tablosu
CREATE TABLE athlete_programs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    athlete_id INT NOT NULL,
    program_id INT NOT NULL,
    status ENUM('assigned', 'in_progress', 'completed') DEFAULT 'assigned',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (athlete_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (program_id) REFERENCES training_programs(id) ON DELETE CASCADE
);
--Feedbacks
CREATE TABLE feedbacks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    athlete_id INT NOT NULL,
    program_id INT NOT NULL,
    message TEXT NOT NULL,
    coach_response TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (athlete_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (program_id) REFERENCES training_programs(id) ON DELETE CASCADE
);