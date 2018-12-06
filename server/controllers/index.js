var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err,results) => {
        if (err) {
          let statusCode = 404;
          res.writeHead(statusCode);
          res.end();
        } else {
          res.writeHead(200);
          res.end(JSON.stringify(results));
        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post((err,results) => {
        if (err) {
          let statusCode = 404;
          res.writeHead(statusCode);
          res.end();
        } else {
          res.writeHead(201);
          res.end(JSON.stringify(results));
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {

    }
  }
};

