require('dotenv').config();
require('./config/index');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = 5000 || process.env.port;

app.listen(port, () => {
    console.log(`server running on port : ${port}`);
});
