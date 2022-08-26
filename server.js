const express = require("express");
const App = express();
const path = require("path");
const http = require("http");
const https = require("https");

const ServerHttp = http.createServer(WebApp);
//const ServerHttps = https.createServer(WebApp);

App.get("/", (req, res) => {
    return res.status(200).json({ 
        message: "Server is UP"
    });
});

module.exports = App;
module.exports.HTTP = ServerHttp;
//module.exports.HTTPS = ServerHttps;
