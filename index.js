require('dotenv').config()
const express = require('express')


const app = express()
const port = 3000

const gitHUbdata = {
  "Name" : "Ankit",
  "Surname" : "Savaiya",
  "Phone Number" : "9847389433",
  "email" : "sdfyuiweu@kjsdf.com",
  "Message" : "This is my first whatever you wanna say,",
  "Size" : "6.6",
  "Status": "Mingle",
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=> {
    res.send('AnkitSavaiya')
})

app.get('/login',(req,res) =>{
    res.send('<h1> Please login</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Utube</h2>')
})

app.get("/github",(req,res)=>{
  res.json(gitHUbdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
