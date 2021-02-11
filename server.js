// load the express package and create our app
var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user1:databaseuser1@cluster0.iriju.mongodb.net/lab?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
MongoClient.connect(uri, function (err, db){
    if(err) throw err;

    console.log('End the database stuff');
})
// set the port based on environment (more on environments later)
var port = PORT;
// send our index.html file to the user for the home page
app.get('/', function(req, res) {
 res.sendFile(__dirname + '/index.html');
});

// create routes for the admin section
//get an instance of the router
var adminRouter = express.Router();
// admin main page. the dashboard (http://localhost:PORT/admin)
adminRouter.get('/', function(req, res) {
 res.send('I am the dashboard!'); });
// route middleware that will happen on every request
adminRouter.use(function(req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    // continue doing what we were doing and go to the route
    next(); });
   
// users page (http://localhost:PORT/admin/users)
adminRouter.get('/users', function(req, res) {
 res.send('I show all the users!'); });
// posts page (http://localhost:PORT/admin/posts)
adminRouter.get('/login', function(req, res) {
    req.open("GET","/login?input1=" + input1 + "&input2=" + input2, true) });
    var output = 'processing the login form...';
    var input1 = reg.query.input1;
    var input2 = reg.query.input2;
    console.log('The params:' + reg.query.input1 + "" + reg.query.input2);
// apply the routes to our application
app.use('/admin', adminRouter);

// start the server
app.listen(PORT);
console.log('Express Server running at http://127.0.0.1:'+PORT);