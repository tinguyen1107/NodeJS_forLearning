class NewsController {

    // [GET] /news
    index (req, res) {
        res.render('news')
    }

    show (req, res) {
        res.send('NOT EXIST!')
    }
}

module.exports = new NewsController