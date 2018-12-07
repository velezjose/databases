CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50)
);

CREATE TABLE messages (
  message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  messageText VARCHAR(280),
  roomname VARCHAR(20),
  createdAt DATETIME,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);



/*CREATE TABLE friendlist (

)*/

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

