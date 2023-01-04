const User = require('../models/User');
const Listing = require('../models/Listing');
const Booking = require('../models/Booking');
// use asyncHandler to eliminate writing try and catch statements
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

// Get all users
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password').lean();
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' });
    }
    res.json(users);
});

// Create new user
const createNewUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, phoneNumber, email, password, role } = req.body;

    // Check data is present
    if (!firstName || !lastName || !phoneNumber || !email || !password || !role) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check for duplicate
    const duplicate = await User.findOne({ email }).lean().exec();
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate email' });
    }

    // Hash password
    const hashedPwd = await bcrypt.hash(password, 10); // salt rounds

    const userObject = {
        firstName, lastName, phoneNumber, email, "password": hashedPwd, role
    };

    // create and store new user
    const user = await User.create(userObject);

    if (user) {
        res.status(201).json({ message: `New user ${email} created` });
    } else {
        res.status(400).json({ message: 'Invalid user data received' });
    }
});

// Update new user
const updateUser = asyncHandler(async (req, res) => {
    const { id, firstName, lastName, phoneNumber, email, password, role } = req.body;

    // Check data is present
    if (!id || !firstName || !lastName || !phoneNumber || !email || !role) {
        return res.status(400).json({ message: 'All fields execept password are required' });
    }

    const user = await User.findById(id).exec();

    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    // check for duplicate
    const duplicate = await User.findOne({ email }).lean().exec();
    // Allow updates to the original user
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate email' });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.phoneNumber = phoneNumber;
    user.email = email;
    user.role = role;

    if (password) {
        // Hash passwrod
        user.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await user.save();

    res.json({ message: `${updatedUser.email} updated` });
});

// delete user
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'User ID Required' });
    }

    const listing = await Listing.findOne({ lister: id }).lean().exec();
    const bookings = await Booking.findOne({ bookedBy: id }).lean().exec();

    if (listing || bookings) {
        return res.status(400).json({ message: 'User has listings or bookings' });
    }

    const user = await User.findById(id).exec();

    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    const result = await user.deleteOne();

    const reply = `Email ${result.email} with ID ${result._id} deleted`;

    res.json(reply);
});

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};