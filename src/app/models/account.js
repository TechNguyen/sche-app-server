const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const Schema = mongoose.Schema
const account = new Schema ({
    username: String,
    password: String
}, {
    collection: 'accsh',
    timestamps: true
})
const accModel = mongoose.model("accsh", account);
module.exports = accModel