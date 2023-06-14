const mongoose = require('mongoose');
async function connect() {
    try {   
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    } catch(error) {
        alert(error)
    }
};
module.exports = {connect}