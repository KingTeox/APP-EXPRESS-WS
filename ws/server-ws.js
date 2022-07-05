const ws = require('ws');
const http = require("http");

/**
 * 
 * @param {ws.WebSocketServer} wss 
 */
function onListening(wss) {
    console.log(`[Teox] <WS> Listening \n[Teox] <WS> Address: ${wss.address()?.address}\n[Teox] <WS> Port: ${wss.address()?.port || "Invalido"}\n[Teox] <WS> Family: ${wss.address()?.family  || "Invalido"}`);
};

function onError(error) {
    console.log(`[Teox] <WS> Error: ${error.name} - ${error.message}`);
};

function onClose() {
    console.log(`[Teox] <WS> Closed`);
};

/**
 * 
 * @param {ws.WebSocketServer} wss
 * @param {ws.WebSocket} ws 
 * @param {http.IncomingMessage} req 
 */
function onConnection(wss, ws, req) {
    const ip = req.headers['x-forwarded-for']?.toString() || "Invalido";
    console.log(`[Teox] <WS> Cliente Conectado IP: ${ip}`);
    ws.on("message", (data, isBinary) => {

        let Data = data.toString("utf-8");
        let DataJ = JSON.parse(Data);

        console.log(DataJ)

        console.log(`[Teox] <WS> Type: ${DataJ.Type}\n[Teox] <WS> User: ${DataJ.Client.tag}\n[Teox] <WS> Comandos: ${DataJ.Comandos}\n[Teox] <WS> Eventos: ${DataJ.Eventos}\n[Teox] <WS> Caches: ${DataJ.Caches}`);
        console.log(`[Teox] <WS> Clients: ${wss.clients.size}`);
        wss.clients.forEach((client) => {
            client.send(`Client: ${DataJ.Client.tag} - ${DataJ.Type}`)
        });
    }); ws.on('close', () => console.log(`[Teox] <WS> Cliente Desconectado`));
};

module.exports = (servidor, Tipo) => {

    const wss = new ws.WebSocketServer({
        server: servidor
    });
 
    wss.on('connection', (ws, request) => onConnection(wss, ws, request));
    wss.on('error', onError);
    wss.on('listening', () => onListening(wss));
    wss.on('close', onClose);

    console.log(`[Teox] <WS> Server is Started ${Tipo}`);
    return wss;
}