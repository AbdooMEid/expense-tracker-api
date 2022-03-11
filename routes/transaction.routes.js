const app = require('express').Router()
const {getTransactions , addTransaction , deleteTransaction} = require('../controllers/transaction')



app
 .route('/')
 .get(getTransactions)
 .post(addTransaction);



app
 .route('/:id')
 .delete(deleteTransaction) 

module.exports = app