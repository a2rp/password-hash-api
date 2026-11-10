// src/controllers/analyze.controller.js
const { BCRYPT_HASH_PATTERN } = require("../constants/bcrypt");

const analyzeHash = (req, res) => {
    const match = BCRYPT_HASH_PATTERN.exec(req.params.hash || "");

    if (!match) {
        return res.status(400).json({
            message: "Invalid bcrypt hash format",
        });
    }

    return res.status(200).json({
        version: match[1],
        rounds: Number(match[2]),
    });
};

module.exports = {
    analyzeHash,
};
