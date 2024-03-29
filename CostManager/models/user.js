/*
 * Developers:
 * - First Name: Snir
 * - Last Name: Taub
 * - ID: 207332107
 * 
 * - First Name: Nir
 * - Last Name: Aizen
 * - ID: 313272537
 */

const mongoose = require('mongoose');

// Define the structure of the user schema
const userSchema = new mongoose.Schema(
    {
        id: Number,
        first_name: String,
        last_name: String,
        birthday: Date
    }
);

// Create a model named 'User' based on the userSchema
const User = mongoose.model('User', userSchema);

module.exports = User;