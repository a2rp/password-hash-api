// src/controllers/hash.controller.js
const { hashSchema, verifySchema } = require("../validators/hash.schemas");
const {
    hashPasswordWithRounds,
    verifyPasswordHash,
} = require("../utils/bcrypt");

const hashPassword = async (req, res, next) => {
    try {
        const parsed = hashSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(400).json({
                message: "Validation error",
                errors: parsed.error.flatten(),
            });
        }

        const { password, rounds } = parsed.data;

        const result = await hashPasswordWithRounds(password, rounds);

        return res.status(200).json(result);
    } catch (err) {
        return next(err);
    }
};

const verifyPassword = async (req, res, next) => {
    try {
        const parsed = verifySchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(400).json({
                message: "Validation error",
                errors: parsed.error.flatten(),
            });
        }

        const { password, hash } = parsed.data;

        const ok = await verifyPasswordHash(password, hash);

        return res.status(200).json({ ok });
    } catch (err) {
        return next(err);
    }
};

module.exports = {
    hashPassword,
    verifyPassword,
};
