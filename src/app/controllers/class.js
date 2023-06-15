const course = require('../models/classcourse')
const {multiltoObject, mongoogeToObject} = require('../../ultis/mongoose')

class meController {
    async rendertable(req,res) {
        const data = await course.find().sort({number: 1})
        try {
            res.status(200).json(data);
        } catch(error) {
            res.status(500).send(error);
        }
    }
    async create(req,res,next) {
            let day = {
                class : req.body.class,
                Time : req.body.Time,
                money: req.body.money,
                number: req.body.number
            }
            try {
               const data = await course.create(day);
               res.status(200).json(data);
            } catch (next) {
                res.status(404).send(err)
            }

    }
}

module.exports = new meController()