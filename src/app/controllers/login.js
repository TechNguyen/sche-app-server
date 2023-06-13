const {multiltoObject, mongoogeToObject} = require('../../ultis/mongoose')
const Accounts = require('../models/account')
const jwt = require('jsonwebtoken')
class login {
    async singin(req,res,next) {
        const acc = {
            username: req.body.username,
            password: req.body.password
        }
        const checkacc = await Accounts.find(acc);
        if(checkacc.length == 0) {
            res.status(404).json(false);
        } else {
            res.json(checkacc)
        }
    }
}
module.exports = new login()