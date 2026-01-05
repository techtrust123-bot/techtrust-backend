const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const dbConnection = require("./Dbconnection/dbConfig.js")
const router = require("./Routes/authRoute.js")
 require("dotenv").config()
 const app = express()


dbConnection()
const URLs = ['https://techtrust-backend.onrender.com']
app.use(cookieParser()) 
app.use(express.json())
app.use(cors({
    origin: URLs,
    credentials: true
}))

const port = process.env.PORT | 4000

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})

app.use("/api/auth",router)