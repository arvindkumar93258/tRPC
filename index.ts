import "dot-env/config";
import http from "node:http";
import type { Server } from "node:http";

import config from "./config";


import app from "./app";

let server: Server;

async function initApp() {
    //FIXME:connect prisma first

    server = http.createServer(app);
    server.listen(config.port,)
}
