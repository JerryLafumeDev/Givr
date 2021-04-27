/******************************
=============Setup=============
*******************************/
var multer  = require('multer');
// var upload = multer({ dest: 'uploads/' }).single('theImage')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '/static/uploads/'))
      // cb(null, "localhost:" + process.env.PORT + '/static/uploads/')
  },
  filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
          cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
      });
  }
});

var upload = multer({storage: storage})
var express = require('express')
var app     = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

require('dotenv').config()
const fileUpload = require('express-fileupload')
const MongoClient = require('mongodb').MongoClient
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
// var uniqid  = require('uniqid')
var ObjectId = require('mongodb').ObjectID
var morgan       = require('morgan');
var bodyParser   = require('body-parser')
var session      = require('express-session');
var baffle = require('baffle');

const DB_NAME = process.env.DB_NAME
const DB_URL =process.env.DB_URL+`/${DB_NAME}`
const PORT = process.env.PORT || 9999
// const { Server } = require('mongodb')
// console.log(`*********URL : ${DB_URL}`)
var db


/******************************
=========Mongo Config=========
*******************************/
mongoose.connect(DB_URL, (err, database) => {
  if (err) return console.log(err)
  db = database
  require('./app/routes.js')(app, db, passport, ObjectId, upload);
});

require('./config/passport')(passport); // pass passport for configuration

/******************************
=========Express Setup=========
*******************************/

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileUpload())
app.use('/uploads' ,express.static('uploads'))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

/******************************
=========Passport Setup=========
*******************************/
// required for passport
app.use(session({
    secret: 'whatsThisFor', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// launch ======================================================================
http.listen(PORT);
console.log('Your project is on port ' + PORT);


// socket.io connecting
io.on('connection', function(socket){
  console.log('client is connected' + socket.id)

  socket.on('userMessage', (data) => {
    socket.broadcast.emit('userMessage', data)
  })
})
