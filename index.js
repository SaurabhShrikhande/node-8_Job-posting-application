const express = require("express");


const app = express();

app.use(express.json());


app.get("/", (req, res)=>{
       res.send(
        {
            status : "sucess",
            massage  : "API hit"
        }
       
       )
})




app.listen(10000, ()=>{
    console.log('server is up and running on port 10000')
})