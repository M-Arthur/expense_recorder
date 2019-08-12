var router = require('./router.js');

module.exports = function(app) {
    app.use('/daily_expense', router);
}
