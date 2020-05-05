const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Welcome to our Server and it is running...')
})

module.exports = router