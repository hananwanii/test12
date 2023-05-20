// console.log("inside models/task.js");

const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    datetime: {
        type: String,
        required: false
    }
})

const Task = mongoose.model('Task', listSchema);

module.exports = Task