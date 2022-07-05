const HTTP = require("./server").HTTP;
const HTTPS = require("./server").HTTPS;
const WS = require("./server-ws");
const PORTA = process.env.PORT || 8081

//HTTP.listen({ port: PORTA }, () => {
//    console.log(`[Teox] <HTTP> Server Listening ${PORTA}`);
//});

//WS(HTTP, "HTTP");

HTTPS.listen({ port: PORTA }, () => {
    console.log(`[Teox] <HTTPS> Server Listening ${PORTA}`);
});

WS(HTTPS, "HTTPS");