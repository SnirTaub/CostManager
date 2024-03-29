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

const express = require('express');
const router = express.Router();
const Cost = require('../models/cost');

// Define a route handler for POST requests to the root URL ('/')
router.post('/', async (req, res) =>
{
    // Destructure the request body to extract the necessary fields
    const {
        user_id,
        year,
        month,
        day,
        description,
        category,
        sum
    } = req.body;

    try
    {
        // Create a new Cost object with the extracted fields
        const newCost = new Cost(
            {
                user_id,
                year,
                month,
                day,
                description,
                category,
                sum
            }
        );

        // Save the newCost object to the database
        await newCost.save();

        // Send a 201 (Created) response with the newCost object in JSON format
        res.status(201).json(newCost);
    }
    catch (err)
    {
         // If an error occurs, send a 500 (Internal Server Error) response with the error message
        res.status(500).json({ message: err.message});
    }
});

module.exports = router;