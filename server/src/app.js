//Requires
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
//APP SETUP
const app = express()
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
//INITIAL ROUTES
app.get('/', (req, res) => {
    res.send('reeee')
})
app.post('/register', (req, res) =>{
    res.send('Hello ${req.body.email} was registered!')
})
//SERVER STATUS
app.listen(process.env.PORT || 8081, () => {
    console.log('Server Started')
})
