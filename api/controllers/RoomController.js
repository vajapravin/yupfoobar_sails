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

    var user = User.create( { username: req.body.username, password: req.body.password } ).exec( function(err, user) {
            
            return res.json( { success: true, message: 'Room successfully created with user!' } );

            // check first is error
            if (err) {
                console.log('Error: ' + err);
                res.serverError(err);
            }

            // TODO: If error not found, create room and send successfull message as response
            Room.create( { name: req.body.roomname, user_id: user.id }).exec( function(err, room) {
                return res.json( { success: true, message: 'Room successfully created with user!' } );
            });

        });
    
    res.json(user);

  }
  
};
