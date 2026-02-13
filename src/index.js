// src/index.js
require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT ? Number(process.env.PORT) : 1198;

app.listen(PORT, () => {
    console.log(`Password Hash API running on http://localhost:${PORT}`);
});
