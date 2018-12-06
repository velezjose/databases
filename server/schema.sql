DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  username VARCHAR(50),
  messageText VARCHAR(280),
  roomname VARCHAR(20)  
);

CREATE TABLE friendlist (
  username VARCHAR(50),
  friend VARCHAR(50)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

