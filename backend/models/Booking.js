const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Listing'
    },
    bookings: [{
        type: String,
        required: true
    }],
    price: {
        type: Number,
        required: true
    },
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

module.exports = mongoose.model('Booking', bookingSchema);