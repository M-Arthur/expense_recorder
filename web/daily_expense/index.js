var router = require('./router.js');

module.exports = function(app) {
    // Load daily expense module router
    app.use('/daily_expense', router);
};
