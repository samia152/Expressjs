const express = require("express");

const app = express();

app.use(express.json());

let books = [
    {
        id: 1,
        title: "JavaScript Basics",
        author: "John Smith",
        category: "Programming"
    },
    {
        id: 2,
        title: "Node.js Guide",
        author: "David Brown",
        category: "Programming"
    }
];

app.post("/books", (req, res) => {

    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    };

    books.push(newBook);

    res.status(201).json(newBook);
});


app.get("/books", (req, res) => {
    res.json(books);
});


app.get("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.json(book);
});

app.put("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    book.title = req.body.title;
    book.author = req.body.author;
    book.category = req.body.category;

    res.json(book);
});


// DELETE BOOK
app.delete("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    books = books.filter(book => book.id !== id);

    res.json({
        message: "Book deleted successfully"
    });
});

app.get("/books/search", (req, res) => {

    const author = req.query.author;
    const category = req.query.category;

    let result = books;

    if (author) {
        result = result.filter(
            book => book.author === author
        );
    }

    if (category) {
        result = result.filter(
            book => book.category === category
        );
    }

    res.json(result);
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});