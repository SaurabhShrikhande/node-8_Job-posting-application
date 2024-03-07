const express = require("express");
const mongoose = require("mongoose");
const jobRoutes = require("./routes/job");
const app = express();
 
//estabilish the databse connection
mongoose      //  mongodb+srv://saurabh:saurabh@123456@cluster0.t2ejvfz.mongodb.net/
               // mongodb://0.0.0.0:27017/jobapp    //for localhost
.connect("mongodb+srv://saurabh:tjvGuXZT0yI9CnIN@cluster0.t2ejvfz.mongodb.net/")
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