const { User, validate } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
});

module.exports = routre;
