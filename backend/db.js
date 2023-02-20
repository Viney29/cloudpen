const mongoose = require('mongoose')
const mongoUrl = process.env.MONGO_DB_URL;

const connectToMongo = () =>{
    mongoose.connect(mongoUrl,()=>{
        console.log('Connected to Mongo DB Successfully')
    })
}

module.exports = connectToMongo