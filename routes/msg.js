const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserModel = require('../models/Users.js')

router.get('/', async (req, res) => {
  data = await UserModel.find({});
  res.json(data)
})

router.post('/', async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user)
})

module.exports = router