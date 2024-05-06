const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose')
const cookieParser = require('cookie-parser')
const {url} = require('./config')

const app = express();

//database connection
mongoose.connect(url) //Web: process.env.MONGO_URL //docker: url
.then(()=> console.log('Database Connected'))
.catch((err) => console.log('Database not Connected', err))

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, ()=> console.log(`server is running on port ${port}`))

