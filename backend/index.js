const express = require("express");
const app = express();
const { connection } = require("./config/db");
require("dotenv").config();
const { userRouter } = require("./routes/users.routes")

app.use(express.json());
app.use("/users",userRouter)


app.listen(process.env.port, async ()=>{

    try{
        await connection;
        console.log("connected to database")
    }catch(err){
        console.log("cannot connect to database");
    }
})

