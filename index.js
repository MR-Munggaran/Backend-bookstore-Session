const express = require('express')
const cors = require('cors')
require('dotenv').config()
const session = require('express-session')

const port = process.env.PORT
const app = express()
const Database = require('./Database/index')
const RouteBooks = require('./routes/books')
const RouteUsers = require('./routes/users')

Database()
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SECRET_KEY, // Ganti dengan secret key yang aman
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set true jika Anda menggunakan HTTPS
  }));

// app.use(cors({
//     origin: "http://127.0.0.1:3000",
//     methods:["GET","POST","PUT","DELETE",],
//     allowedHeaders:["Content-Type"]
// }))

app.use('/books',RouteBooks )
app.use('/users',RouteUsers )

app.get('/', (req,res)=>{
    res.status(200).send("<h1>Hello Kawan<h1/>")
})

app.listen(port, ()=> {
    console.log(`App is listen in Port: ${port}`)
})


