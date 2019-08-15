var mysql = require('mysql');

var con = mysql.createConnection({
    host: global.gConfig.dbhost,
    user: global.gConfig.dbuser,
    password: global.gConfig.dbpass
});

con.connect(function (err) {
  if (err) throw err;
  console.log('connected');
});

module.exports = con;
