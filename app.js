const express = require('express') 
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require ('cors')
const morgan = require('morgan')
const authRouters = require('./routes/auth')
const analysticRouters = require('./routes/analystic')
const categoryRouters = require('./routes/category')
const orderRouters = require('./routes/order')
const positionRouters = require('./routes/position')
const keys = require('./config/keys')


const app = express ()
mongoose.set('useUnifiedTopology', true)
mongoose.connect(keys.mongoURI, { useNewUrlParser: true})
     .then(()=> console.log('mongoDB connected.'))
     .catch(error => console.log(error))
   
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cors())


app.use('/api/auth', authRouters)
app.use('/api/analystic', analysticRouters)
app.use('/api/category', categoryRouters)
app.use('/api/order', orderRouters)
app.use('/api/position', positionRouters)

module.exports = app
