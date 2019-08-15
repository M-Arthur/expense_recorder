const path = require('path');
var a = [1,2,3,4];
exports.get = function(req, res) {
  res.render('daily_expense/html/index', {result: a});
};

exports.post = function(req, res) {
  res.send('Post actions.');
};
