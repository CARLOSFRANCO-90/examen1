const mongoose = require('mongose')
const movie_schema = mongoose.movie_schema({
    movie_name:{
        type:String,
        require: true,
        unique: true

    },
    credits:{
        type: Number,
        require: true
    }

})

module.exports = mongoose.model('MovieCollate', movie_schema)