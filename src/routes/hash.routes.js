// src/routes/hash.routes.js
const express = require("express");

const {
    hashPassword,
    verifyPassword,
} = require("../controllers/hash.controller");

const router = express.Router();

router.post("/hash", hashPassword);
router.post("/verify", verifyPassword);

module.exports = router;
