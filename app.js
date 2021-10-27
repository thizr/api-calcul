const express = require('express')
const app = express()

const router = require('./router/note')

const bodyParser = require("body-parser")
const cors = require('cors')
const db = require("./db/db")

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use(cors({
    origin: '*',
    methods : ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowHeaders: 'content-type, Authorization, X-Requested-With, Origin, accept'
}))

app.use('/api-calcul', router)

app.use((req, res, next)=>{
    console.log('Server on !')
    next()
})

module.exports = app