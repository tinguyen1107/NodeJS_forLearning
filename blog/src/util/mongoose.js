module.exports = {
    multipleMongooseToObject: function (mongoooses) {
        return mongoooses.map(mongoose => mongoose.toObject())
    },

    mongooseToObject: function (mongoooses) {
        return mongoooses ? mongoooses.toObject() : mongoooses
    },
}