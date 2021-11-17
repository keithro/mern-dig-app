const express = require('express');
const router = express.Router();
const Dog = require('../models/Dog');

router.post("/", (req, res) => {
  Dog.create(req.body)
    .then(dog => res.status(201).json({ status: 201, data: dog }))
    .catch((e) => console.log(e));
});

module.exports = router;
