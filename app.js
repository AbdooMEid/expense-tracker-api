const express = require('express');
const app = express()
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan')
const connectDB = require('./config/db')


dotenv.config({path:'./config/config.env'})
connectDB();


const transactions = require('./routes/transaction.routes');

app.use(express.json())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))

}

app.use('/api/v1/transaction',transactions)



const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log(`Server Is Running ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))