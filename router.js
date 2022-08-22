const express = require("express")
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('./index')
})

router.post('/submit', (req, res) => {
    const {text} = req.body
    if(text === 'Babatunde')
        res.render('./nextPage')
}) 

module.exports = router;