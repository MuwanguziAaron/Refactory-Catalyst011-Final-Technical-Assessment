const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
    Surname: {
        type:String,
        trim:true
    },
    Givenname: {
        type:String,
        trim:true,
        
    },
    DateofBirth:{
        type:String,
        trim:true
    },
    Placeofresidence:{
        type:String,
        trim:true
    },
    Occuption:{
        type:String,
        trim:true
    },
    Nationality:{
        type:String,
        trim:true
    },
    Gender:{
        type:String,
        trim:true
    },
    category:{
        type:String,
        trim:true
    }
})

module.exports = mongoose.model('Reg',regSchema);