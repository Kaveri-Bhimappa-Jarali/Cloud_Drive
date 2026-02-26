const express = require("express");
const File = require("../models/File");

const router = express.Router();

router.get("/", async (req, res) => {
  const files = await File.find().sort({ uploadedAt: -1 });
  res.json(files);
});

module.exports = router;