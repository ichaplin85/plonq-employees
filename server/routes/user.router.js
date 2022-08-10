const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Department = require('../models/Department');


router.get('/', async (req, res) => {

  try {
    const users = await User.find({})
    return res.status(200).json({
      users
    })

  } catch (e) {

  }
})

router.post('/add', async (req, res) => {
  const { fullName, birthdate, position, salary, department } = req.body;
  console.log(req.body);
  // console.log(department);
  try {
    const user = await User({ fullName, birthdate, position, salary })
    await user.save()

    const dep = await Department.findOne({ title: department })
    dep.users.push(user._id)

    await dep.save()

    return res.status(200).json(dep)
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'register error' })
  }
})

router.delete('/delete:id', async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const user = await User.deleteOne({ id })
    console.log(user);
    // return res.status(200).json(user)
  } catch (error) {
    return res.status(401).json({ messag: error })
  }
})

module.exports = router;
