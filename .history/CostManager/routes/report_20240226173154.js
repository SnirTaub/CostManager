const express = require('express');
const router = express.Router();
const Cost = require('../models/cost');

router.get('/', async (req,res) =>
{
    const { user_id, year, month} = req.query;
})