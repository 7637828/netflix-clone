const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")
const app = express();
app.use(cookieParser())


dotenv.config({path:'./config.env'})

require("./db/conn");
app.use(express.json())

// const User = require('./model/userSchema')

app.use(require('./router/auth'));


const port = process.env.PORT;

// const DB = "mongodb+srv://abhishek:Abhishek12@cluster0.zm7ecwq.mongodb.net/?retryWrites=true&w=majority"

// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// }).then(()=>{
//     console.log("connection successfully")
// }).catch((err)=>{
//     console.log("connection not successfully")

// })












// app.get('/about', middleware, (req,res)=>{
//     res.send('Hello About world from the server');
// })

app.get('/contact', (req,res)=>{
    res.send('Hello Contact world from the server');
})

app.get('/signin', (req,res)=>{
    res.send('Hello signin world from the server');
})


app.get('/signup', (req,res)=>{
    res.send('Hello signup world from the server');
})


app.listen(port,()=>{
    console.log(`server is running at port no ${port} `)

})
console.log('Abhishek')