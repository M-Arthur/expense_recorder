const path = require('path');

exports.get = function(req, res) {
    res.sendFile(path.join(__dirname + '/index.htm'));
}

exports.post = function(req, res) {
    res.send('Post actions.');
}
