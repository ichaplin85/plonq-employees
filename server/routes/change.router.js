const express = require('express');
const router = express.Router();

const User = require('../models/User');



router.patch('/:id', async (req, res) => {
  const { fullName, birthdate, position, salary } = req.body;
  const { id } = req.params;

  try {
    const user = await User.findOneAndUpdate({ id }, { fullName, birthdate, position, salary })

    await user.save()

    return res.status(200).json(user)
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'register error' })
  }
})


module.exports = router;
