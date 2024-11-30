require('dotenv').config()
const express = require('express') 
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/SignUp',(req,res)=>{
res.send("Hey you are at signup page")
})

app.get('/Youtube',(req,res)=>{
  res.send('<a href="https://www.youtube.com/watch?v=7fjOw8ApZ1I&t=3048s">Backend series</a>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})