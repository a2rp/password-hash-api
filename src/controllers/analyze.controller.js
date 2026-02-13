// src/controllers/analyze.controller.js
const { decodeFromUrl } = require("../utils/url");

const analyzeHash = (req, res) => {
    const rawParam = String(req.params.hash || "").trim();
    const hash = decodeFromUrl(rawParam);

    const parts = hash.split("$").filter(Boolean);

    if (parts.length < 3) {
        return res.status(400).json({
            message: "Invalid bcrypt hash format",
        });
    }

    const version = parts[0];
    const roundsRaw = parts[1];
    const rounds = Number(roundsRaw);

    if (!Number.isFinite(rounds)) {
        return res.status(400).json({
            message: "Invalid rounds in hash",
        });
    }

    return res.status(200).json({
        version,
        rounds,
    });
};

module.exports = {
    analyzeHash,
};
