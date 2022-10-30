const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const connectDB = require('./config/db');

// Load config
dotenv.config({path: "./config/config.env"})

// Connect to mongoDB
connectDB();

const app = express();

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT;

// Handlebars
app.engine('.hbs', engine({defaultLayout: 'mainLayout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Static folder
app.use(express.static('public'))

// Routes
app.use('/', require('./routes/index'))


app.listen(PORT, console.log(`Server connected in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))