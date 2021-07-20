const mongoose = require ('mongoose')
const slug = require ('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const Course = new Schema({
        name: { type: String, required: true },
        description: { type: String },
        author: { type: String },
        semester: { type: String },
        year: { type: String },
        image: { type: String },
        video: { type: String },
        slug: { type: String, slug: 'name', unique: true},
    }, {
        timestamps: true,
    }
)

mongoose.plugin(slug)
Course.plugin(mongooseDelete, {
    overrideMethods: true,
    deletedAt: true,
}) 

module.exports = mongoose.model('Course', Course)