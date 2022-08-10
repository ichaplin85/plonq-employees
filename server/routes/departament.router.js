const express = require('express');
const router = express.Router();

const Department = require('../models/Department');


router.get('/', async (req, res) => {

  try {
    const departaments = await Department.find({})
    return res.status(200).json({
      departaments
    })

  } catch (e) {
    return res.status(409).json({message: e})
  }
})


module.exports = router;
