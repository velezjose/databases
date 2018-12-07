var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      db.connection.query('select * from messages', (error, results) => {
        if (error) {
          // throw new Error(error);
          callback(error);
        } else {
          callback(null, results);
          console.log('GET RESULTS: ', results);
        }
      })
    }, 

//select user_id from users where username = 'Valjean'
// insert into messages (user_id, messageText, roomname, createdAt) values (${user_id}, '${message}', '${roomname}', '${createdAt}')
    // a function which can be used to insert a message into the database
    post: function ({username, message, roomname}, createdAt, callback) {
      let user_id = `(select user_id from users where username = ${JSON.stringify(username)})`
      var queryStr = `insert into messages (user_id, messageText, roomname, createdAt) values (${user_id}, ${JSON.stringify(message)}, ${JSON.stringify(roomname)}, ${JSON.stringify(createdAt)})`;
      db.connection.query(queryStr, (error, results, fields) => {
        if (error) {
          console.log('ERROR IN MODELS POST: ', error);
          callback(error);
        } else {
          console.log('QUERY STRING MODELS POST: ', queryStr);
          callback(null, results);
        }
       });
    } 
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.connection.query('select username from users', (error, results) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
          console.log('GET RESULTS: ', results);
        }
      })
    },
    
    post: function (username, callback) {
      var searchStr = `select * from users where username=${JSON.stringify(username)}`;
      var queryStr = `insert into users (username) values (${JSON.stringify(username)})`;

      db.connection.query(searchStr, (error, results) => {
        if (results.length === 0) {
          db.connection.query(queryStr, (error, results) => {
            if (error) {
              console.log('ERROR IN USERS.POST db: ', error);
              callback(error);
            } else {
              console.log('POST RESULTS: ', results);
              callback(null, results);
            }
          });
        }
      });
    }
  }
};

