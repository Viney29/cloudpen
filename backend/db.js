const mongoose = require('mongoose')
const mongoUrl = 'mongodb://localhost:27017/cloudpen?directConnection=true&tls=false&readPreference=primary'

const connectToMongo = () =>{
    mongoose.connect(mongoUrl,()=>{
        console.log('Connected to Mongo DB Successfully')
    })
}

module.exports = connectToMongo