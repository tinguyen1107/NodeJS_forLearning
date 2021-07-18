class HomeController {

    // [GET] /home
    index (req, res) {
        res.render('home')
    }
}

module.exports = new HomeController