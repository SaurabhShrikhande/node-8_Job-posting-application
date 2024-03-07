const jobmodel = require("../model/job")   //need for // insert data in db

const createjob = async (req, res)=>{
    try{
       // console.log(req.body);
      
        // insert data in db
        // insert 2 step other .findmany .delete one step
        
             // for save  new 
           //  new jobmodel.(req.body);
  
           const newjob = new jobmodel(req.body);
          const newlyaddeddata =  await newjob.save()   // which is a method
           

        res.json({
              sucess : true,
              message : `dummy create api ${newlyaddeddata._id}`
          })
    }  catch (err){  
        res.json({
            sucess : false,
            message : `error ${err}`
        })
    }
    
    }


const getjob = async (req, res)=>{
       const joblist = await jobmodel.find({});

        res.json({
            sucess : true,
            message : "dummy get job api",
            result : joblist

        })
    }


    const edit = async (req , res) => {
                                        //synatax
        await jobmodel.updateOne({_id : req.body._id}, { $set : req.body})
      // await jobmodel.findByIdAndUpdate(req.body._id , req.body )  //work if not refer lecture 29.02.24
        res.json({
            susess : true,
            Massage : "edit request sussesful",

        })
    }

    const del = async (req, res) => {
         await jobmodel.findByIdAndDelete(req.body._id)
    
         //   await jobmodel.deleteOne(req.body._id);
        
        res.json({
            susess : true,
            Massage : "deleted"
        })
    }


module.exports = {
    createjob ,
    getjob,
    edit,
    del
}