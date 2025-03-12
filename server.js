const express = require('express')

const app = express()

app.get('/', (req,res) => {
    console.log('Good Morning CSDC105')
    res.status(500).send('Hindi ka nya mahal')
    
})


app.listen(3000)
