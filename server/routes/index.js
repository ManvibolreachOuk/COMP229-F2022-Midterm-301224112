//----------------------------------
//File name: index.js
//Author's Name: Manvibolreach Ouk
//Student ID: 301224112
//Web App name: Faculty Information
//Date: October 24, 2022
//----------------------------------

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let faculty = require("../models/faculties");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    faculties: "",
  });
});

module.exports = router;
