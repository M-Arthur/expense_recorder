var express = require('express');
var server = require('./server.js');
var dailyExpense = require('./daily_expense/index.js');

var app = express();

// Load daily expense page
dailyExpense(app)

// Initialise server
server(app);
