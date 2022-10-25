//----------------------------------
//File name: faculties.js
//Author's Name: Manvibolreach Ouk
//Student ID: 301224112
//Web App name: Faculty Information
//Date: October 24, 2022
//----------------------------------

let mongoose = require("mongoose");

// create a model class
let Faculty = mongoose.Schema(
  {
    Facultyid: Number,
    Facultyname: String,
    Department: String,
    Subject: String,
  },
    
  {
    collection: "faculties",
  }
);

module.exports = mongoose.model("Faculty", Faculty);
