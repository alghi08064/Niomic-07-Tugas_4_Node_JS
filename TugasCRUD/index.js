// import express
let express = require('express');

// import body parser
let bodyParser = require('express');

//import mongoose
let mongoose = require('mongoose');

//initialize app
let app = express();

// import routes
let apiRoutes = require("./api-routes");

//configuration bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//connect mongoose and set connection variable
mongoose.connect('mongodb://localhost/TugasCRUD');
var db = mongoose.connection;

//setup server port
var port = process.env.PORT || 8080;

//send message for default URL
app.get('/', (req, res) => res.send("Selamat Datang Di Data Center Siswa Indonesia"));

// app ApiRoutes
app.use('/api', apiRoutes);

//launcg app to listen specified port
app.listen(port, function() {
  console.log("running on port " + port);
})
