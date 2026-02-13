// src/utils/bcrypt.js
const bcrypt = require("bcrypt");

// config
const DEFAULT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS
    ? Number(process.env.BCRYPT_SALT_ROUNDS)
    : 12;

const safeRounds = (n) => {
    const v = Number(n);

    if (!Number.isFinite(v)) return 12;
    if (v < 4) return 4;
    if (v > 15) return 15;

    return Math.floor(v);
};

const resolveRounds = (rounds) => {
    if (typeof rounds === "number") return safeRounds(rounds);
    return safeRounds(DEFAULT_ROUNDS);
};

const hashPasswordWithRounds = async (password, rounds) => {
    const roundsUsed = resolveRounds(rounds);
    const hash = await bcrypt.hash(password, roundsUsed);

    return {
        hash,
        roundsUsed,
    };
};

const verifyPasswordHash = async (password, hash) => {
    const ok = await bcrypt.compare(password, hash);
    return ok;
};

module.exports = {
    hashPasswordWithRounds,
    verifyPasswordHash,
};
