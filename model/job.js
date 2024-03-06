const mongoose = require("mongoose")

const jobschema =
{
    title : {
        type : String,
        required : true  //without required data in DF not uniform
        //unique : true  //when collection empty / new project
    },
   
   description : {
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true,
        default : 0  //if not provide salary then default val 0
    },

    //no more key : value we can put in db but less possible for less


};

// mongoose.model(name of module , schema name )
                  //name of collection in db
 
 /*                 mongoose.model("jobs" , jobschema) */

//now schema connected with mongoose
//we alredy tell the path of jobapp in idx.js so no nned need here jobapp/jobs

const jobmodel = mongoose.model("jobs" , jobschema)

module.exports = jobmodel;