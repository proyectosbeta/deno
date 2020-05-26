
# Running the app
```
deno run -c tsconfig.json --allow-env --allow-read --allow-net app.ts
```

# Requests
```
  Method GET: /books --> Returns all books
  Method GET: /book/:id --> Return a book by id
  Method POST: /books --> Add a new book
  Method PUT: /books/:id --> Update an existing book
  Method DELETE: /books/:id --> Delete requested book
```

# Try in API client:
  Method GET:
  ```
    http://127.0.0.1:3000/books/
    http://127.0.0.1:3000/book/1
  ```
