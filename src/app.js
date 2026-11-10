// src/app.js
const express = require("express");

const analyzeRoutes = require("./routes/analyze.routes");
const hashRoutes = require("./routes/hash.routes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.disable("x-powered-by");
app.use(express.json({ limit: "16kb" }));

app.get("/health", (req, res) => {
    return res.status(200).json({
        status: "ok",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
});

app.use("/", hashRoutes);
app.use("/", analyzeRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
