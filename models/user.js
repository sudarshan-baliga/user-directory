//import the required things
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//create the user schema

var userSchema = new Schema({
    name: String,
    address: String,
    contact: String, //cause number had dashes
    email:String
});


//create the model
var User = mongoose.model('User', userSchema);


//export the model

module.exports = User;