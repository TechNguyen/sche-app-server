const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const  date = require('date-and-time')
const Schema = mongoose.Schema
const course = new Schema ({
    class: String,
    Time : String,
    money: Number,
    number: Number
}, {
    collection: 'sche',
    timestamps: true
})
const classModel = mongoose.model("sche", course);
module.exports = classModel