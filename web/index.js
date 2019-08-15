var express = require('express');

var server = require('./server.js');
var mysql = require('../library/mysql.js');
var dailyExpense = require('./daily_expense/index.js');

var app = express();
app.set('views', __dirname + '/');
app.set('view engine', 'pug');

// Load daily expense page
dailyExpense(app);

// Initialise server
server(app);
