const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userTest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const Connection = mongoose.connection;

Connection.on('connected', () => {
  console.log('Connected to db');
});

Connection.on('disconnected', () => {
  console.log('Disconnected to db');
});

Connection.on('error', err => {
  console.log('DB connection error', err);
});

process.on('SIGINT', () => {
  Connection.close(() => {
    console.log('DB connection closed due to process termination');
    process.exit(0);
  });
});

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 100,
  },
  password: {
    type: String,
    required: true,
    max: 100,
  },
});

module.exports = mongoose.model('Users', UserSchema);
