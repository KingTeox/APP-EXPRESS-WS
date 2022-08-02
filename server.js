const express = require("express");
const WebApp = express();
const TestApp = express();
const path = require("path");
const http = require("http");
const https = require("https");

const ServerHttp = http.createServer(WebApp);
const ServerHttps = https.createServer(WebApp);

//WebApp.use('/assets', express.static(path.join(__dirname, "./assets")));

WebApp.get("/", (req, res) => {
    //return res.sendFile(path.join(__dirname + '/index.html'));
    return res.status(200).json({ 
        message: "Server is UP"
    });
});

module.exports.HTTP = ServerHttp;
module.exports.HTTPS = ServerHttps;
