const express = require("express");
const router = express.Router();
module.exports = router;
const db = require("./db");

router.get("/", (req, res) => {
  res.render("index");
});

//
router.post("/", (req, res) => {
  const translated = db.parselTongue(req.body.translate);
  const viewData = {
    name: req.body.name,
    message: translated,
    imgUrl: req.body.characters,
  };
  db.addHistoryItem(viewData).then(() => {
    res.render("translated", viewData);
  });
});

router.get("/translated", (req, res) => {
  res.render("translated");
});

router.get("/history", (req, res) => {
  return db.getHistory()
  .then (result => {
    const viewData = {
  
      history: result.splice(result.length-10, 10)
    }
    res.render("history", viewData);
  });
});
