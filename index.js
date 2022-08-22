const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./router')

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(router)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))