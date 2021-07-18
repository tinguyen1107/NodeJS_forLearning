const homeRouter = require('./home')
const newsRouter = require('./news')
const searchRouter = require('./search')

function route (app) {
    ///route
    app.use('/home', homeRouter)

    app.use('/news', newsRouter)

    app.use('/search', searchRouter)
}

module.exports = route