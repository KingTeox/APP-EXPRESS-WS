const HTTP = require("./server").HTTP;
const HTTPS = require("./server").HTTPS;
const WS = require("./server-ws");
const PORTA = process.env.PORT || 21006

HTTP.listen({ port: 8080 }, () => {
    console.log(`[Teox] <HTTP> Server Listening 8080`);
});

WS(HTTP, "HTTPS");

HTTPS.listen({ port: PORTA }, () => {
    console.log(`[Teox] <HTTPS> Server Listening ${PORTA }`);
});


