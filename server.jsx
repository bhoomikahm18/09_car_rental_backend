const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express()

app.get('/', (req, res) => res.send('Hello world'))

mongoose.connect(`mongodb+srv://bhoomikahm18:${process.env.PASSWORD}@cluster0.276ab22.mongodb.net/cars?retryWrites=true&w=majority`)
    .then(app.listen(process.env.PORT))
    .then(() => console.log(`Connected to database and server is running at ${process.env.PORT}`)
    )
    .catch (err => console.log(err))


//8MhI6FPlaj4LFri3