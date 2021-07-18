class SearchController {

    // [GET] /news
    index (req, res) {
        res.render('search')
    }
}

module.exports = new SearchController