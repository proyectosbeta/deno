import { Router } from "https://deno.land/x/oak/mod.ts";
import {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
} from "./api/controller.ts";

const router = new Router();

router
  .get("/books", getBooks)
  .get("/books/:id", getBook)
  .post("/books", createBook)
  .put("/books/:id", updateBook)
  .delete("/books/:id", deleteBook);

export default router;