const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({
        message: 'Lol'
    })
})

app.listen(process.env.PORT || 8081, () => {
    console.log('Server Started')
})
