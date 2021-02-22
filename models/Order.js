const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const orderShema = new Schema ({
    user : {
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    date : {
        type: Date,
        default: Date.now
    },
    order : {
        type: Number,
        required : true
    }
})

module.exports = mongoose.model('orders', orderShema)