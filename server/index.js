const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./controllers/user');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/login', user.login);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listen at port ${PORT}`);
});
