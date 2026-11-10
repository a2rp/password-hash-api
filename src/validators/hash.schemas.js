// src/validators/hash.schemas.js
const { z } = require("zod");
const {
    BCRYPT_VERIFY_HASH_PATTERN,
    MAX_BCRYPT_PASSWORD_BYTES,
    MAX_BCRYPT_ROUNDS,
    MIN_BCRYPT_ROUNDS,
} = require("../constants/bcrypt");

const passwordSchema = z
    .string()
    .min(1, "Password required")
    .refine(
        (password) =>
            Buffer.byteLength(password, "utf8") <= MAX_BCRYPT_PASSWORD_BYTES,
        "Password must be 72 UTF-8 bytes or fewer for bcrypt",
    );

const hashSchema = z.object({
    password: passwordSchema,
    rounds: z
        .number()
        .int()
        .min(MIN_BCRYPT_ROUNDS)
        .max(MAX_BCRYPT_ROUNDS)
        .optional(),
});

const verifySchema = z.object({
    password: passwordSchema,
    hash: z
        .string()
        .regex(
            BCRYPT_VERIFY_HASH_PATTERN,
            "Invalid bcrypt hash or cost factor",
        ),
});

module.exports = {
    hashSchema,
    verifySchema,
};
