const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pranav_vinodan:1Exyc9xHgEoFKQtq@pranav.msmumjl.mongodb.net/");

const todoSchema =  mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
    Todo
}
