const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Department = require('../models/Department');

router.delete('/:id', async (req, res) => {

  const { id } = req.params;
  try {
    const user = await User.deleteOne({ id })
    return res.status(200).json(user)
  } catch (error) {
    return res.status(401).json({ messag: error })
  }
})

module.exports = router;
