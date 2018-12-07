var db = require('../db');
// var messages = require('../db');
// var users = require('../db');
var Sequelize = require('sequelize');


// messages.sync();
// users.sync();

module.exports = {
  messages: {
    // a function which produces all the messages
    get: () => {
      return new Promise((resolve, reject) => {
        db.db.messages.findAll()
          .then(messages => {
            resolve(messages);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    // a function which can be used to insert a message into the database
    post: ({username, message, roomname}, createdAt) => {
      debugger;
      return new Promise((resolve, reject) => {
        db.db.messages.create({username: username, messageText: message, roomname: roomname, createdAt: createdAt})
          .then(messages => { debugger; resolve(JSON.stringify(messages)); })
          .catch(err => { reject(err); });
      });
    }
  },

  users: {
    // Ditto as above.
    get: () => {
      return new Promise((resolve, reject) => {
        db.db.users.findAll()
          .then(users => {
            resolve(users);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    
    post: (username) => {
     // debugger;
      return new Promise((resolve, reject) => {
        db.db.users.findOrCreate({where: {'username': username}, defaults: {}})
          .then((user, created) => { 
            console.log('FIND OR CREATE: ', username);
            resolve(username); 
          })
          .catch(err => { 
            console.log('ERROR IN FOC: ', err); 
            reject(err); 
          });
      });
    }
  }
};

