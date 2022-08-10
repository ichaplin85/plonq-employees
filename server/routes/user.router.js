const express = require('express');
const router = express.Router();

const User = require('../models/User');


router.get('/', async (req, res) => {

  try {
    const users = await User.find({})
    return res.status(200).json({
      users
    })

  } catch (e) {

  }
})

module.exports = router;
