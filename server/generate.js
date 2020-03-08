const Users = require('./mongodb/');
const dataJSON = require('./data.json');
const crypto = require('./security/passwordCrypt');

const { users } = dataJSON;

users.map(user =>
  crypto.hashPassword(user.password).then(hash => {
    const newUser = new Users({ ...user, password: hash });
    newUser.save();
  }),
);
