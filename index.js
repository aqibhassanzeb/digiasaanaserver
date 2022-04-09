// useful packages
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var dotenv = require('dotenv');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();
dotenv.config();
var jsonParser = bodyParser.json();
// routes
var incomeDetail = require('./routes/IncomeDetail');
var self = require('./routes/selfDepositeAmount');
var team = require('./routes/teamDepositeAmount');
var changePassword = require('./routes/ChangePassword');
var changePassword = require('./routes/ChangePassword');
var register = require('./routes/registration');


// appp uses
app.use(morgan('dev'))
app.use(cors({ origin: '*' }));
app.use(cookieParser());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/public", express.static("public"))
// api
app.use('/api/v1', incomeDetail);
app.use('/api/v1', self);
app.use('/api/v1', team);
app.use('/api/v1', changePassword);
app.use('/api/v1', register);
// database connection
const data = mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    // listen to port
    app.listen(process.env.PORT);
    console.log('The Application Is Running At Port:' + process.env.PORT)
})
