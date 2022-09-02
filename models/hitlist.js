const mongoose = require('mongoose')


const HitlistSchema = new mongoose.Schema({
    companyName:{
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    rolePosition:{
        type: String
    },
    typeOfPosition:{
        type: String
    },
    source:{
        type: String
    },
    userId: {
    type: String,
    required: true
  }
})



module.exports = mongoose.model('Hitlist', HitlistSchema)