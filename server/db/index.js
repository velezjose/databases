var Sequelize = require('sequelize');

var db = new Sequelize('chat', 'student', 'student');

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var users = db.define('users', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: Sequelize.STRING
});

var messages = db.define('messages', {
  message_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: users,
      key: 'user_id'
    }
  },
  messageText: Sequelize.STRING,
  roomname: Sequelize.STRING,
  createdAt: Sequelize.DATE(6)
});

messages.sync();
users.sync();

db
  .authenticate('student', 'student')
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  exports.db = db;
  exports.messages = messages;
  exports.users = users;
  