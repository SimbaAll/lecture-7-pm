import express from "express";
import jwt from "jsonwebtoken";
   
const Secret_Key = "MyJwtKey"
const app = express()

app.post("/login",(req,res)=>{
    const user = {
        id:1,
        name:"Abcd",
        email:"abcd123@gmail.com",
        password:"abcd123"
    }
    jwt.sign({ user }, Secret_Key, { expiresIn: "300s"}, (err,token)=>{
        res.json({
            token
        })
    })
})

app.post("/profile", getJwt, (req,res)=>{
    jwt.verify(req.token, Secret_Key, (error, userData)=>{
        if (error) {
            res.json({
                result:"Invalid Token"
            })
        } else {
            res.json({
                result:"Success",
                userData
            })
        }
    })
})

function getJwt(req,res,next) {
    const headers = req.headers['authorization']
    if (typeof headers !== 'undefined') {
        const headerData = headers.split(" ")
        const token = headerData[1]
        req.token = token
        next()
    } else {
        res.send({result:"Can't Get Token..."})
    }
}

app.listen(3000, ()=>{
    console.log(`Server Running on 3000`);
})

