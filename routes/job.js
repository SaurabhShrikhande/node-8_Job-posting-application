const express = require("express");

const jobcontroler = require("../controler/job");


const router = express.Router();

router.post("", jobcontroler.createjob)


router.get("", jobcontroler.getjob)
// router.get("" , ()=>{

// })


router.patch("", jobcontroler.edit)


router.delete("" , jobcontroler.del)

module.exports = router;