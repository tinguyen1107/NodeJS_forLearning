const course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class NewsController {
  // [GET] /news
  index(req, res, next) {
    course.find({})
      .then(courses => {
        res.render('news', {
          course: multipleMongooseToObject(courses),
        })
      })
      .catch (next)

    // res.render('news');
  }

  show(req, res) {
    res.send('NOT EXIST!');
  }
}

module.exports = new NewsController();
