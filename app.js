require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const MONGODB_URI = 'mongodb+srv://kevin:node1234@cluster0-kmmuu.mongodb.net/portfolio-projects';

const app = express();

const projectRoutes = require('./routes/projects');

app.use(bodyParser.json());
app.use(cors())

app.use(projectRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
})

mongoose.connect(MONGODB_URI)
    .then(app.listen(8000, () => console.log('Server running on port 8000')))
    .catch(err => console.log(err))