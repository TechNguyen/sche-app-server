const course = require('./courses')
function Route(app) {
    app.use('/', course)
}
module.exports = Route