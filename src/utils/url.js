// src/utils/url.js

const encodeForUrl = (value) => {
    if (typeof value !== "string") return "";
    return encodeURIComponent(value);
};

const decodeFromUrl = (value) => {
    if (typeof value !== "string") return "";
    return decodeURIComponent(value);
};

module.exports = {
    encodeForUrl,
    decodeFromUrl,
};
