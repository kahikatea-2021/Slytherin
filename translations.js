const express = require("express");
const router = express.Router();
module.exports = router;
const db = require("./db");

router.get("/", (req, res) => {
  res.render("index");
});

//router.get();
