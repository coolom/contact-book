const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all user contacts");
});

router.post("/", (req, res) => {
  res.send("save a contact");
});

router.put("/:id", (req, res) => {
  res.send("update a contact");
});

router.delete("/:id", (req, res) => {
  res.send("update a contact");
});

module.exports = router;
