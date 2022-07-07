const express = require("express");
const WebApp = express();
const TestApp = express();
//const vhost = require("vhost")
const path = require("path");
const http = require("http");
const https = require("https");

const ServerHttp = http.createServer(WebApp);
const ServerHttps = https.createServer(WebApp);

//TestApp.get("/", (req, res) => {
//    res.json({
//        name: "OK " + req.hostname
//    });
//});

WebApp.use('/assets', express.static(path.join(__dirname, "./assets")));
//WebApp.use(vhost('test.teox.herokuapp.com', TestApp))

WebApp.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports.HTTP = ServerHttp;
module.exports.HTTPS = ServerHttps;