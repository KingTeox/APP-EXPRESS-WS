const http = require("http");
const App = require("./server");
const WS = require("./server-ws");
const PORTA = process.env.PORT || 3000

App.set("port", PORTA);

let Servidor = http.createServer(App)

Servidor.listen(PORTA);

Servidor.on("listening", () => {
    console.log(`[Teox] <Server> Online: ${PORTA}`); 
    WS(Servidor);
});

Servidor.on("error", (error) => {
    console.log(`[Teox] <Server> Error: ${error}`);
});
