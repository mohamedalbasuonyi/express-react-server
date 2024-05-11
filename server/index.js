const express = require('express')

const app = express()

const port = 3000 

app.use(express.static('public'))



app.get('/', (req, res)=>{
    res.send('Server is runining well')
    
    })
app.get('/message', (req, res)=>{
res.send('hello from our server')

})



app.post('/api', (req, res)=>{
    res.send("received post request")
})

app.listen(port, ()=>{
    console.log('Server is operational')
})


