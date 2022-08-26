const express = require("express");
const App = express();

App.get("/", (req, res) => {
    return res.status(200).json({ 
        message: "Server is UP"
    });
});

module.exports = App;
