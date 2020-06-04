# ApiRest

## Running the app

```bash
deno run -c tsconfig.json --allow-env --allow-read=data/books.json --allow-net app.ts
```

Or install [denox](https://github.com/BentoumiTech/denox/) (You might need to put the export in your .bash_profile)

```bash
deno install -Af -n denox https://denopkg.com/BentoumiTech/denox/denox.ts
```

Then you can run `denox run start` just as `npm run [script]`, neat, huh?

## Requests

```text
  Method GET: /books --> Returns all books
  Method GET: /book/:id --> Return a book by id
  Method POST: /books --> Add a new book
  Method PUT: /books/:id --> Update an existing book
  Method DELETE: /books/:id --> Delete requested book
```

## Try in API client

Method GET:

```bash
  http://127.0.0.1:3000/books/
  http://127.0.0.1:3000/book/1
```

```

```
