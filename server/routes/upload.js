const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const File = require("../models/File");

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

router.post("/", upload.single("file"), async (req, res) => {
  try {
    console.log("UPLOAD HIT");           // 🔹 debug
    console.log("FILE:", req.file);      // 🔹 debug

    if (!req.file) {
      return res.status(400).json({ error: "No file received" });
    }

    const base64File = req.file.buffer.toString("base64");
    const dataURI = `data:${req.file.mimetype};base64,${base64File}`;

    console.log("Uploading to Cloudinary..."); // 🔹 debug

    const result = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",   // 🔥 THIS IS IMPORTANT
    });

    console.log("Cloudinary result:", result.secure_url); // 🔹 debug

    const savedFile = await File.create({
      filename: req.file.originalname,
      url: result.secure_url,
    });

    res.json(savedFile);
  } catch (error) {
    console.error("UPLOAD ERROR:", error); // 🔴 IMPORTANT
    res.status(500).json({ error: "File upload failed" });
  }
});

module.exports = router;