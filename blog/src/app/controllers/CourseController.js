const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {

  // [GET] /courses/create
  create (req, res, next) {
    res.render('courses/create')
  }

  // [GET] /courses/:slug
  show(req, res, next) {
    // res.send('Course - ' + req.params.slug + ' - Not Found!');
    Course.findOne({ slug: req.params.slug })
      .then(course => {
        res.render('courses/show', {
          course: mongooseToObject(course),
        })
      }) 
      .catch(next)
    // res.render('show')
  }
}

module.exports = new CourseController();
