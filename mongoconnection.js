// import mongoose from "mongoose";

// const url = "mongodb://localhost:27017/Student"

// mongoose.set('strictQuery',false)
// export default mongoose.connect(url)

import mysql2 from "mysql2";

const dbConnection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"students"
})

export default dbConnection