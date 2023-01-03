const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                var re = /^\d{10}$/;
                return (!v || !v.trim().length) || re.test(v);
            },
            message: 'Provided phone number is invalid.'
        }
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: {
            values: ['user', 'admin'],
            message: '{VALUE} is not supported'
        },
        default: 'user'
    }
});

module.exports = mongoose.model('User', userSchema);