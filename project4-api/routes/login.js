const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const AppError = require('../lib/app_error');

function createJsonWebToken(data) {
  return jwt.sign(data, process.env.SECRET, { expiresIn: '24h' });
}

router.post('/login', async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.findByEmail(email);
    if (!user) {
      throw new AppError(400, 'User not found');
    }
    
    const match = await bcrypt.compare(password, user.password_digest);
    if (!match) {
      throw new AppError(400, 'Invalid email or password');
    }
    
    const token = createJsonWebToken(user);
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await User.create(username, email, password);
    const token = createJsonWebToken({ id: newUser.id, email: newUser.email });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
