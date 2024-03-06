const express = require("express");

const jobcontroler = require("../controler/job");


const router = express.Router();

router.post("", jobcontroler.createjob)


router.get("", jobcontroler.getjob)
// router.get("" , ()=>{

// })


module.exports = router;