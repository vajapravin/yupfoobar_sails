/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

// TODO: include bcrypt module for password
var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    username: 'string',
    password: 'string',
    loggedIn: 'boolean',

    // TODO: Add a reference to room
    room: {
        model: 'room'
    }
  },

  // TODO: encrypt password before create
  beforeCreate: function (values, next) {
      bcrypt.hash(values.password, 8, function (err, hash) {
          if (err) return next(err);
          
          values.password = hash;
          next();        
      });
  }

};