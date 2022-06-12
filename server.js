const { json } = require('express');
const express = require('express');
const app = express()
const PORT = 8000

const database = {savage:{
    'age':29,
    'birthName':'Sheyaa',
    'birthLocation':'London, England'
},
kate:{
    'age':27,
    'birthName':'Qiqi',
    'birthLocation':'Urumqi, China'
},
Bruno:{
    'age':31,
    'birthName':'Frog',
    'birthLocation':'Ronvile, Brazil'
}}

const savage={
    'age':29,
    'birthName':'Sheyaa',
    'birthLocation':'London, England'
}

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html')
})

app.get('/api',(req,res)=>{
    res.json(database)
})

app.get('/api/:name',(req,res)=>{
    const name = req.params.name
    if(database[name]){
        res.json(database[name])
    }else{res.json(database['kate'])}  
})

app.listen(PORT,()=>{
    console.log(`The server is running on ${PORT}. Attention!`)
})
