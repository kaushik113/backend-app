require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working
console.log("hello kaushik");

const express = require('express')


const app = express()
//i can use app to create routes and handle requests
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kaushik', (req, res) => {
  res.send('Hello Kaushik! i am calling get This is your backend server.')
})
app.get('/home', (req, res) => {
  res.send('This is home page of backend server.')
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})