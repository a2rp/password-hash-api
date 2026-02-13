// src/routes/analyze.routes.js
const express = require("express");
const { analyzeHash } = require("../controllers/analyze.controller");

const router = express.Router();

// URL encode required because bcrypt hash has "$"
router.get("/analyze/:hash", analyzeHash);

module.exports = router;
