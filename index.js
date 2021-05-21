require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const router = require('./src/router')
const cors = require('cors')
const app = express()
const createError = require('http-errors')

const PORT = process.env.PORT || 4000

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use('/v1', router)


app.use('*', (req, res, next) => {
  const error = new createError.NotFound()
  next(error)
})
// error handling
app.use((err, req, res, next)=>{
  if(!err.status){
    err.status = 500
  }
  res.json({
    message: err.message,
    status_error: err.status
  }).status(err.status)

})


app.listen(PORT, ()=>{
  console.log(`server running in ${PORT}`);
})
