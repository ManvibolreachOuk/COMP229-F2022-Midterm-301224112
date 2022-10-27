//----------------------------------
//File name: faculties.js(edit,add,delete)
//Author's Name: Manvibolreach Ouk
//Student ID: 301224112
//Web App name: Faculty Information
//Date: October 24, 2022
//----------------------------------


// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const faculties = require("../models/faculties");

// define the faculty model
let faculty = require("../models/faculties");

/* GET faculties List page. READ */
router.get("/", (req, res, next) => {
  // find all faculties in the faculties collection
  faculty.find((err, faculties) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("faculties/index", {
        title: "Faculties",
        faculties: faculties,
      });
    }
  });
});

//  GET the faculty Details page in order to add a new faculty
router.get("/add", (req, res, next) => {
  res.render("faculties/add", { title: "Add a Faculty" });
});

// POST process the faculty  Details page and create a new faculty  - CREATE
router.post("/add", (req, res, next) => {
   let newfaculties = faculties({
    Facultyid : req.body.Facultyid,
    Facultyname : req.body.Facultyname,
    Department : req.body.Department,
    Subject : req.body.Subject,
  });
  faculties.create(newfaculties, (err, faculties) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the book-list
      res.redirect("/faculties");
    }
  });
});

// GET the faculty  Details page in order to edit an existing faculty
router.get("/edit/:id", (req, res, next) => {
   let id = req.params.id; //id of actual object
   faculties.findById(id, (err, facultiestoedit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("faculties/edit", { title: "Edit", faculties: facultiestoedit });
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post("/edit/:id", (req, res, next) => {
   let id = req.params.id; //id of actual object
   
   let updatefaculties = faculties({
    _id : id,
    Facultyid : req.body.Facultyid,
    Facultyname : req.body.Facultyname,
    Department : req.body.Department,
    Subject : req.body.Subject,
  });
  faculties.updateOne({ _id: id }, updatefaculties, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the book list
      res.redirect("/faculties");
    }
  });
});

// GET - process the delete
router.get("/delete/:Facultyname", (req, res, next) => {
   let Facultyname = req.params.Facultyname;
   faculties.remove({ Facultyname }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh book list
      res.redirect("/faculties");
    }
  });
});

module.exports = router;
