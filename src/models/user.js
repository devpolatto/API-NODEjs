const mongoose = require('mongoose');

//schema do DB
const userSchema = new mongoose.schema({
    name: {
        type: String,
        require: true,//solicita que seja obrigatorio o nome
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;