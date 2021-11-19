const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
    task: {
        type: String, 
        required: true
    },
    date:{
        type: Date, default: new Date()
    },
    isCopmlated: {
        type: String ,
        required: false
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, ref: "users"
    },
});

module.exports = mongoose.model("todos" , todosSchema);
