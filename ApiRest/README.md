
# Running the app
```
deno run --allow-env --allow-net app.ts
```

# Requests
```
  Method GET: /books --> Returns all books
  Method GET: /book/:id --> Returns a book by id
  Method POST: /books --> Adds a new book
  Method PUT: /books/:id --> Updates an existing book
  Method DELETE: /books/:id --> Deletes requested book
```

# Try in API client:
  Method GET:
  ```
    http://127.0.0.1:3000/books/
    http://127.0.0.1:3000/book/1
  ```
