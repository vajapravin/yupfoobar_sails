/**
 * RoomController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = { 

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to RoomController)
   */
  _config: {},

  // TODO: register room action
  register: function(req, res) {
    
    // TODO: Create room and member(user) of that room
    var room = Room.create({name: req.param('roomName')}).exec(function(err, room) {
            
            // Check first is error
            if (err) {
                console.log('Error: ' + err);
                return res.serverError(err);
            }
            
            // TODO: If error not found, create user and send successfull message as response
            User.create( { username: req.param('username'), password: req.param('password'), room: room.id } ).exec( function(err, user) {
                    return res.json( { success: true, message: 'Room successfull created with user!' } );
                 });
        });

    res.json(room);
  }

  
};
