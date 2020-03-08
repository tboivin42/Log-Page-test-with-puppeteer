const jwt = require('jsonwebtoken');
const crypto = require('../security/passwordCrypt');
const User = require('../mongodb');

const login = async (req, res) => {
  const { email: userEmail, password: userPassword } = req.body;

  const privateKey = 'private';
  const user = await User.findOne({ email: userEmail });
  if (!user) {
    return res.status(401).send({ message: 'Invalid identification' });
  }

  const key = await crypto.arePasswordsEquals(userPassword, user.password);

  if (key) {
    const token = jwt.sign(
      { sub: user._id },
      privateKey,
      { expiresIn: '30m' },
      { algorithm: 'HS256' },
    );
    res.send({ success: true, token: `JWT ${token}`, user });
  } else {
    res.status(401).send({ message: 'Invalid identification' });
  }
};

module.exports.login = login;
