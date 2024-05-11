const express = require('express')

const app = express()

const port = 3000 

app.use(express.static('public'))

const root = require('path').join(__dirname,'../client/dist')
app.use(express.static(root))

app.get('/', (req, res)=>{
    res.sendFile('index.html', {root})
    
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


