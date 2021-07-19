// const course = require('../models/Course')
// const { multipleMongooseToObject } = require('../../util/mongoose')

class HomeController {
  // [GET] /home
  index(req, res, next) {
    res.render('home');
  }
}

module.exports = new HomeController();
