const mongoose = require('mongoose');
async function connect() {
    try {   
        await mongoose.connect('mongodb://localhost:27017/admin', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch(error) {
        alert(error)
    }
};
module.exports = {connect}