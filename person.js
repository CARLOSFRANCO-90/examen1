const mongoose  = require('mongose')
const personSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    }
   
})

module.exports = mongoose.model('PersonCollection', personSchema)