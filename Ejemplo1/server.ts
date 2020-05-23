/** ES Modules */
import { serve } from "https://deno.land/std@0.52.0/http/server.ts";

const PORT = 3000;

/** Create Server */
const server = serve({
    port: PORT
});

console.log("http://localhost:" + PORT);
for await (const req of server) {
    req.respond({
        body: "<h2>Hola seguidores de Proyectos Beta</h2>" 
    });
}