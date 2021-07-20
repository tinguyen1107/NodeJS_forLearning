const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class CoursesController {
  // [GET] /news
  index(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render('courses', {
          course: multipleMongooseToObject(courses),
        })
      })
      .catch (next)

    // res.render('news');
  }
}

module.exports = new CoursesController();
