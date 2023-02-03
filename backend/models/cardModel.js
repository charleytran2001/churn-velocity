const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dateOpenedSchema = new Schema({
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
}, { _id: false });

const cardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    opened: {
        type: dateOpenedSchema,
        required: true
    }
});

module.exports = mongoose.model('Card', cardSchema);