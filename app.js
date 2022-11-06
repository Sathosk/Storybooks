const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectDB = require('./config/db');

// Load config
dotenv.config({path: "./config/config.env"});

// Passport config
require('./config/passport') (passport);

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

// Sessions
app.use(session({
    secret: 'chrono trigger',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_STR,
        mongooseConnection: mongoose.connection
    })
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Static folder
app.use(express.static('public'))


// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

app.listen(PORT, console.log(`Server connected in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))