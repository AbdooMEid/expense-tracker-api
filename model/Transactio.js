const mongoose = require('mongoose');





const TransactionSchema = mongoose.Schema({
    text : {
        type : String,
        trim : true,
        required : [true , 'Please add some Text']
    },
    amount :{
        type: String,
        required : [true , 'Please add a positive or Negative number']
    },
    createdAt :{
        type : Date,
        default : Date.now
    }
});




module.exports = mongoose.model('Transaction' , TransactionSchema)