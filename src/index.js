// src/index.js
require("dotenv").config();

const app = require("./app");

const PORT = Number(process.env.PORT || 1198);

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
    throw new Error("PORT must be an integer between 1 and 65535");
}

app.listen(PORT, () => {
    console.log(`Password Hash API running on http://localhost:${PORT}`);
});
