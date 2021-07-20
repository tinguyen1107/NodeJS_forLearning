const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    // [GET] /news
    index(req, res, next) {
    }

    // [GET] /me/stored/courses/
    storedCourses (req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted({})])
            .then(([courses, deletedCount]) => res.render('me/storedCourses', {
                deletedCount,
                course: multipleMongooseToObject(courses)
            }))
            .catch(next)
    }
    
    // [GET] /me/trash/courses
    trashCourses (req, res, next) {
        Course.findDeleted({})
            .then((courses) => res.render('me/trashCourses', {
                course: multipleMongooseToObject(courses)
            }))
            .catch(next)
        // res.render('me/trashCourses')
    }
}

module.exports = new MeController();
