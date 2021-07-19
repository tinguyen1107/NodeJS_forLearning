const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const course = new Schema({
    name: { type: String },
    description: { type: String },
    semester: { type: String },
    year: { type: String },
    image: { type: String },
    video: { type: String },
    slug: { type: String, slug: 'name', unique: true},
    
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Course', course)