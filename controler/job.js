const jobmodel = require("../model/job")   //need for // insert data in db

const createjob =  (req, res)=>{
      console.log(req.body);
      
      // insert data in db
      // insert 2 step other .findmany .delete one step
      
           // for save  new 
         //  new jobmodel.(req.body);

         const newjob = new jobmodel(req.body);
         newjob.save()   // which is a method

      res.json({
            sucess : true,
            message : "dummy create api"
        })
    }


const getjob =  (req, res)=>{
       
        res.json({
            sucess : true,
            message : "dummy get job api"
        })
    }



module.exports = {
    createjob ,
    getjob 
}