var config = require('../config/config.js');

module.exports = function (app) {
    var server = app.listen(global.gConfig.node_port, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log("App listening at http://%s:%s", 'localhost', port);
    });
};
