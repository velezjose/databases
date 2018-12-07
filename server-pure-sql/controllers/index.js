var models = require('../models');

const headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {

    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          let statusCode = 404;
          res.writeHead(statusCode, headers);
          res.end();
        } else {
          res.writeHead(200, headers);
          res.end(JSON.stringify(JSON.parse(JSON.stringify(results))));
        }
      });
    }, 

    // a function which handles posting a message to the database
    post: function (req, res) {
      let date = new Date().toISOString().slice(0, 19).replace('T', ' ');

      models.messages.post(req.body, date, (err, results) => {
        if (err) {
          let statusCode = 404;
          res.writeHead(statusCode, headers);
          res.end();
        } else {
          res.writeHead(201, headers);
          res.end(JSON.stringify(results));
        }
      });
    }
  },

  users: {

    // a function which handles a get request for all messages
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          let statusCode = 404;
          res.writeHead(statusCode, headers);
          res.end();
        } else {
          res.writeHead(200, headers);
          res.end(JSON.parse(results));
        }
      });
    }, 

    // a function which handles posting a message to the database
    post: function (req, res) {
      models.users.post(req.body.username, (err, results) => {
        if (err) {
          let statusCode = 404;
          res.writeHead(statusCode, headers);
          res.end();
        } else {
          res.writeHead(201, headers);
          res.end(JSON.stringify(results));
        }
      });
    }
  }
};