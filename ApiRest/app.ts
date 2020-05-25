import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router.ts";
import {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
} from "./api/controller.ts";

const env = Deno.env.toObject();
const HOST = env.HOST || "127.0.0.1";
const PORT = env.PORT || 3000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`API is listening on ${HOST}:${PORT}...`);
await app.listen(`${HOST}:${PORT}`);