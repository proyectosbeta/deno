import { Book } from './../interfaces/Book.ts';

/**
 * Sample array with books
 */
let books: Array<Book> = [
    {
      id: "1",
      title: "The Codeless Code",
      description: "",
      author: ""
    },
    {
      id: "2",
      title: "97 cosas que todo programador debería saber",
      description: "",
      author: ""
    },
    {
      id: "3",
      title: "El camino a un mejor programador",
      description: "",
      author: ""
    },
    {
      id: "4",
      title: "Aprenda a programar como si estuvieras en primero",
      description: "",
      author: ""
    },
    {
      id: "5",
      title: "Scrum & eXtreme Programming para programadores",
      description: "",
      author: ""
    },
    {
        id: "6",
        title: "Código limpio: manual de estilo para el desarrollo ágil de software",
        description: "",
        author: "Robert C. Martin"
    },
    {
        id: "7",
        title: "No me hagas pensar: una aproximación a la usabilidad en la web",
        description: "",
        author: "Steve Krug"
    },
    {
        id: "8",
        title: "El Libro Negro del Programador: cómo conseguir una carrera de éxito desarrollando software y cómo evitar los errores habituales",
        description: "",
        author: "Rafael Gómez Blanes"
    },
    {
        id: "9",
        title: "Code Complete",
        description: "",
        author: "Steve McConnell"
    },
    {
        id: "10",
        title: "Coders at Work",
        description: "",
        author: "Peter Seibel"
    },
];

/** 
 * Returns all the books
 */
const getBooks = ({ response } : { response: any }) => {
    response.body = books;
};

/**
 * Returns a book by id
 */
const getBook = ({
    params,
    response
}: {
    params: { id: string };
    response: any;
}) => {
    const book = books.filter((book) => book.id == params.id)[0];
    if (book) {
        response.status = 200;
        response.body = book;
    } else {
        response.status = 404;
        response.body = { message: "4040 Not found"};
    }
};

/**
 * Creates a new books
*/
const createBook = async ({
    request,
    response
}: {
    request: any;
    response: any;
}) => {
    const body = await request.body();
    const book: Book = body.value;
    books.push(book);
    response.body = { sucess: true, data: books };
    response.tatus = 201; 
};

/**
 * Updates an existing book.
 */
const updateBook = async ({
    params, 
    request,
    response
} : {
    params: { id: string };
    request: any;
    response: any;
}) => {
    const book = books.filter((book) => book.id == params.id[0]);
    if (book) {
        const body = await request.body();
        // book.title = body.value.title;
        // book.description = body.value.description;
        // book.author = body.value.author;

        console.log(body.value);

        response.status = 200;
        response.body = {
            success: true,
            data: book
        };
    } else {
        response.status = 404;
        response.body = {
            success: false,
            message: "Book not found"
        };
    }
};

/**
 * Delete a book by a given id
 */
const deleteBook = ({
    params,
    response
} : {
    params: { id: string};
    response: any;
}) => {
    books = books.filter((book) => book.id !== params.id);
    response.status = 200;
    response.body = {
        success: true,
        message: "Book removed"
    };
};

export { getBooks, getBook, createBook, updateBook, deleteBook };