const express = require("express");
const mongoose = require("mongoose");
const jobRoutes = require("./routes/job");
const app = express();
 
//estabilish the databse connection
mongoose
.connect("mongodb://127.0.0.1:27017/jobapp")
.then(() => {
    console.log("database connection sussessfully")
})
.catch((err)=> {
    console.log(`database connection fail  ${err}`)
})

app.use(express.json());

app.use("/api/v1/job/", jobRoutes);


// app.use(express.json());


// app.get("/", (req, res)=>{
//        res.send(
//         {
//             status : "sucess",
//             massage  : "API hit"
//         }
       
//        )
// })




app.listen(10000, ()=>{
    console.log('server is up and running on port 10000')
})