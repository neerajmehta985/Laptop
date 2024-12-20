const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const core=require('cors')
require('dotenv').config()

const app = express();
app.use(core())
app.use(express.json())

const port = 5000;

mongoose.connect(process.env.MongoDB)
    .then(() => { console.log('Server Successfully Connected') })
    .catch((err) => { console.log(err) })

app.use('/', router)

app.listen(port, () => { console.log(`Server is Running port - ${port}`) })