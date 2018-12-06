var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('select messageText from messages', (error, results) => {
        if (error) {
          // throw new Error(error);
          callback(error);
        } else {
          callback(null, results);
          console.log('GET RESULTS: ', results);
        }
      })
    }, // a function which produces all the messages
    post: function ({username, text, roomname}, callback) {
      var queryStr = `insert into messages (username, messageText, roomname) values (${username}, ${text}, ${roomname})`;
      db.connection.query(queryStr, (error,results, fields) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
          console.log('POST RESULTS: ', results);
        }
       });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function () {

    }
  }
};

