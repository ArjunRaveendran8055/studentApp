const express = require("express");
const cors = require("cors");
const router = express.Router();
const { test,getStudent} = require("../controllers/constroller");



//middleware

router.use(cors());

//routes

router.get("/", test);

router.post("/getStudent",getStudent)


module.exports = router;
