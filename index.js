const Servidor = require("./server").HTTP;
const WS = require("./server-ws");
const PORTA = process.env.PORT || 3000

Servidor.listen({ port: PORTA });

Servidor.on("error", (error) => {
    console.log(`[Teox] <Server> Error: ${error}`);
});

WS(Servidor);
