const mongoose  = require('mongose')
const { boolean } = require('webidl-conversions')
const movieSchema = mongoose.Schema({
    movie_name:{
        type: String,
        require: true
    },
    season:{
        type: Number,
        require: true
    },

    autors:{
        type: Array,
        require: boolean
    }
    
})

module.exports = mongoose.model('movieCollection', movieSchema)