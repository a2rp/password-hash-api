// src/routes/analyze.routes.js
const express = require("express");
const { analyzeHash } = require("../controllers/analyze.controller");

const router = express.Router();

// Express decodes percent-encoded route parameters before they reach the controller.
router.get("/analyze/:hash", analyzeHash);

module.exports = router;
