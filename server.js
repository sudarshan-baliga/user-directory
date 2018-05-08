var express = require('express');
var bodyParser = require('body-parser');
var http = require('http')
var api = require("./api/api")
var app = express()

app.use(express.static(__dirname + '/dist/'));
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: () => true }));

// //for mongodb connection
app.use('/api',api);

app.get("*", function(req, res){
  res.sendFile(__dirname + "/dist/index.html");
})

server = http.createServer(app)
server.listen(process.env.PORT || 3000, ()=>{
  console.log("listening to port 3000");
})
