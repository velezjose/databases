var models = require('../models');
var Sequelize = require('sequelize');

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
      models.messages.get()
        .then(messages => {
          res.writeHead(200, headers);
          res.end(JSON.stringify(JSON.parse(JSON.stringify(messages))));
          return;
        })
        .catch(err => {
          let statusCode = 404;
          res.writeHead(statusCode, headers);
          res.end();
          return;
        });
    }, 

    // a function which handles posting a message to the database
    post: function (req, res) {
      let date = new Date().toISOString().slice(0, 19).replace('T', ' ');

      models.messages.post(req.body, date)
        .then(results => {
          res.writeHead(201, headers);
          res.end(JSON.stringify(results));
        })
        .catch(err => {
          let statusCode = 404;
          res.writeHead(statusCode, headers);
          res.end();
          return;
        });
    }
  },

  users: {

    // a function which handles a get request for all messages
    get: function (req, res) {
      models.users.get()
        .then(results => {
          res.writeHead(200, headers);
          res.end(JSON.parse(results));
          return; // maybe return ??????
        })
        .catch(err => {
          let statusCode = 404;
          res.writeHead(statusCode, headers);
          res.end();
          return; // maybe return ??????
        });
    }, 

    // a function which handles posting a message to the database
    post: function (req, res) {
      models.users.post(req.body.username)
        .then(results => {
          res.writeHead(201, headers);
          res.end(JSON.stringify(results));
          return;
        })
        .catch(err => {
          let statusCode = 404;
          console.log('ERROR IN POST: ', err);
          res.writeHead(statusCode, headers);
          res.end();
          return;
        }) 
    }
  }
};