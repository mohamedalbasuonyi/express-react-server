const express = require('express')

const app = express()

const port = 3000 


app.get('/message', (req, res)=>{
res.send('hello from our server')

})

app.listen(port, ()=>{
    console.log('Server is operational')
})