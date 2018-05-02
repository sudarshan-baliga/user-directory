const express = require('express');
const router = express.Router();
var mongoose = require("mongoose");
var User = require('../models/user');

//connect to mlab
mongoose.connect('mongodb://sudarshan:1234@ds163769.mlab.com:63769/internship');


router.get('/', (req, res) => {
    res.send('api works');
});


// Get users
router.get('/users', function (req, res, next) {
    User.find({},function (err, users) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(users);
        }
    });
});

//add user
router.put('/users/add',function(req,res,next){
    var newUser = User(
        JSON.parse(req.body)
    );
    newUser.save(function (err) {
        if (err) res.send(err)
    
        console.log('User created!');
        res.send("success");
    });
    

})
//update user
router.post('/users/update',function(req,res,next){
    console.log(JSON.parse(req.body))
    User.findOneAndUpdate({ email:JSON.parse(req.body).email},JSON.parse(req.body),function (err) {
        if (err) {
            res.send(err);
        } 
        else {
            
            res.send("success");
        }
    });
})
//delete user
router.post('/users/delete',function(req,res,next){
    User.findOneAndRemove(JSON.parse(req.body),function (err) {
        if (err) {
            res.send(err);
        } 
        else {
            console.log(JSON.parse(req.body))
            res.send("success");
        }
    });
});

module.exports = router;