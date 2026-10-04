const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

// index.html is in the same folder as server.js
app.use(express.static(__dirname));

const books = [
    {
        id: 1,
        subject: "Data Structures",
        price: 450,
        book: "DSA in C++"
    },
    {
        id: 2,
        subject: "Python",
        price: 350,
        book: "Python Programming"
    },
    {
        id: 3,
        subject: "Database",
        price: 400,
        book: "DBMS Fundamentals"
    },
    {
        id: 4,
        subject: "Web Development",
        price: 500,
        book: "HTML CSS JavaScript"
    },
    {
        id: 5,
        subject: "Mathematics",
        price: 300,
        book: "Engineering Mathematics"
    }
];

app.get("/api/books", (req, res) => {
    res.json(books);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});