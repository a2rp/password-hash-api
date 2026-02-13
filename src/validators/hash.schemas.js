// src/validators/hash.schemas.js
const { z } = require("zod");

const hashSchema = z.object({
    password: z.string().min(1, "Password required"),
    rounds: z.number().int().optional(),
});

const verifySchema = z.object({
    password: z.string().min(1, "Password required"),
    hash: z.string().min(10, "Hash required"),
});

module.exports = {
    hashSchema,
    verifySchema,
};
