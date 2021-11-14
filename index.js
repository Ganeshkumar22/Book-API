require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

//Importing Database
const database = require("./database/database");

//Importing Models
const booksModel = require("./database/books");
const authorsModel = require("./database/authors");
const publicationsModel = require("./database/publications");

// Express Initialization
const myApp = express();

// Body-parser Initialization
myApp.use(bodyParser.urlencoded({extended: true}));
myApp.use(bodyParser.json());

// MongoDB connection via mongoose
mongoose.connect(process.env.MONGO_URL,
).then(() => console.log("Connection Established"));


/ ---------- Books ---------- /

/* 
Route:         /
Description:   To get all the books
Access:        PUBLIC
Parameter:     NONE
Method:        GET
*/
myApp.get("/",async (req, res) => {
  const getAllBooks = await booksModel.find();
  return res.json(getAllBooks);
});


/* 
Route:         /t
Description:   To get a specific book based on title
Access:        PUBLIC
Parameter:     title
Method:        GET
*/
myApp.get("/t/:title",async (req, res) => {
  const getSpecificBook = await booksModel.findOne({title: req.params.title});

  if (!getSpecificBook) {
    return res.json({
      error: `Book not found for the title: ${req.params.title}`,
    });
  }

  return res.json({ Book: getSpecificBook });
});


/* 
Route:         /is
Description:   To get a specific book based on isbn
Access:        PUBLIC
Parameter:     isbn
Methods:       GET
*/
myApp.get("/is/:isbn",async (req, res) => {
  const getSpecificBook = await booksModel.findOne({ISBN: req.params.isbn});

  if (!getSpecificBook) {
    return res.json({
      error: `Book not found for the ISBN: ${req.params.isbn}`,
    });
  }

  return res.json({ book: getSpecificBook });
});


/* 
Route:         /c
Description:   To get a list of books based on category 
Access:        PUBLIC
Parameter:     category
Methods:       GET
*/
myApp.get("/c/:category",async (req, res) => {
  const getSpecificBook = await booksModel.findOne({category: req.params.category});

  if (!getSpecificBook) {
    return res.json({
      error: `Book not found for the category: ${req.params.category}`,
    });
  }

  return res.json({ Book: getSpecificBook });
});


/* 
Route:         /lang
Description:   To get a list of books based on languages 
Access:        PUBLIC
Parameter:     language
Methods:       GET
*/
myApp.get("/lang/:language",async (req, res) => {
  const getSpecificBook = await booksModel.findOne({language: req.params.language});

  if (!getSpecificBook) {
    return res.json({
      error: `Book not found for the language: ${req.params.language}`,
    });
  }

  return res.json({ Book: getSpecificBook });
});

/ ---------- Authors ---------- /

/* 
Route:         /authors
Description:   To get all the authors 
Access:        PUBLIC
Parameter:     NONE
Methods:       GET
*/
myApp.get("/authors",async (req, res) => {
  const getAllAuthors = await authorsModel.find();
  return res.json(getAllAuthors);
});


/* 
Route:         /aid
Description:   To get a specific author based on id
Access:        PUBLIC
Parameter:     id
Methods:       GET
*/
myApp.get("/aid/:id",async (req, res) => {
  const getSpecificAuthor = await authorsModel.findOne({id: req.params.id});

  if (!getSpecificAuthor) {
    return res.json({
      error: `Author not found for the id no: ${req.params.id}`,
    });
  }

  return res.json({ authors: getSpecificAuthor });
});


/* 
Route:         /an
Description:   To get a specific author based on name
Access:        PUBLIC
Parameter:     name
Methods:       GET
*/
myApp.get("/an/:name",async (req, res) => {
  const getSpecificAuthor = await authorsModel.findOne({name: req.params.name});
  if (!getSpecificAuthor) {
    return res.json({
      error: `Author not found for the name: ${req.params.name}`,
    });
  }

  return res.json({ Author: getSpecificAuthor });
});


/* 
Route:         /author/books
Description:   To get a list of authors based on a book 
Access:        PUBLIC
Parameter:     isbn
Methods:       GET
*/
myApp.get("/authors/books/:isbn",async (req, res) => {
  const getSpecificAuthor = await authorsModel.findOne({books: req.params.isbn});

  if (!getSpecificAuthor) {
    return res.json({
      error: `Author not found for the book: ${req.params.isbn}`,
    });
  }

  return res.json({ Author: getSpecificAuthor });
});

/ ---------- Publications ---------- /

/* 
Route:          
Description:   To get all the publication
Access:        PUBLIC
Parameter:     NONE
Methods:       GET
*/
myApp.get("/publications", async (req, res) => {
  const getAllPublications = await publicationsModel.find();
  return res.json(getAllPublications);
});


/* 
Route:         /pid
Description:   To get a specific publication based on id
Access:        PUBLIC
Parameter:     id
Methods:       GET
*/
myApp.get("/pid/:id",async (req, res) => {
  const getSpecificPublication = await publicationsModel.findOne({id: req.params.id});

  if (!getSpecificPublication) {
    return res.json({
      error: `Publication not found for the id no: ${req.params.id}`,
    });
  }

  return res.json({ Publication: getSpecificPublication });
});


/* 
Route:         /pn
Description:   To get a specific publication based on name 
Access:        PUBLIC
Parameter:     name
Methods:       GET
*/
myApp.get("/pn/:name",async (req, res) => {
  const getSpecificPublication = await publicationsModel.findOne({name: req.params.name});

  if (!getSpecificPublication) {
    return res.json({
      error: `Publication not found for the name: ${req.params.name}`,
    });
  }

  return res.json({ Publication: getSpecificPublication });
});


/* 
Route:         /pb
Description:   To get a list of publication based on a book 
Access:        PUBLIC
Parameter:     books
Methods:       GET
*/
myApp.get("/pb/:books",async (req, res) => {
  getSpecificPublication = await publicationsModel.findOne({books: req.params.books});

  if (!getSpecificPublication) {
    return res.json({
      error: `Publication not found for the book: ${req.params.books}`,
    });
  }

  return res.json({ Publications: getSpecificPublication });
});

/--------- Post Requests ----------/

/* 
Route:         /book/new
Description:   Add new books
Access:        PUBLIC
Parameter:     NONE
Methods:       POST
*/
myApp.post("/books/new",async (req, res) => {
  const {newBook} = req.body;
  const addNewBook = booksModel.create(newBook);
  return res.json({
    Books: addNewBook,
    Message: "Book added successfully"
  });
});


/* 
Route:         /authors/new
Description:   Add new authors
Access:        PUBLIC
Parameter:     NONE
Methods:       POST
*/
myApp.post("/authors/new",async (req, res) => {
  const {newAuthor} = req.body;
  const addNewAuthor = authorsModel.create(newAuthor);
  return res.json({
    Authors: addNewAuthor,
    Message: "Author added successfully"
  });
});


/* 
Route:         /publications/new
Description:   Add new publications
Access:        PUBLIC
Parameter:     NONE
Methods:       POST
*/
myApp.post("/publications/new",async (req, res) => {
  const {newPublication} = req.body;
  const addNewPublication = publicationsModel.create(newPublication);
  return res.json({
    Publications: addNewPublication,
    Message: "Publication added successfully"
  });
});

/--------- Put Requests ----------/

/*
Route:            /book/update
Description:      Update book on isbn
Access:           PUBLIC
Parameter:        ISBN
Method:           PUT
*/

myApp.put("/books/update/:isbn", async (req, res) => {

  const updatedBook = await booksModel.findOneAndUpdate({
    ISBN: req.params.isbn
  }, {
    title: req.body.bookTitle
  }, {
    new: true
  });
  return res.json({
    books: updatedBook
  });
});

/*
Route:            /book/author/update
Description:       Update / add new author
Access:            PUBLIC
Parameter:         ISBN
Method:            PUT
*/

myApp.put("/books/author/update/:isbn", async (req, res) => {

  // Update book database
  const updatedBooks = await booksModel.findOneAndUpdate({
    ISBN: req.params.isbn
  }, {
    $addToSet: {
      author: req.body.newAuthor
    }
  }, {
    new: true
  });

  // Update the author database
  const updatedAuthor = await authorsModel.findOneAndUpdate({
    id: req.body.newAuthor
  }, {
    $addToSet: {
      books: req.params.isbn
    }
  }, {
    new: true
  });

  return res.json({
    books: updatedBooks,
    author: updatedAuthor,
    message: "New author was added !!!"
  });
});

/*
Route:            /book/update
Description:      Update book on isbn
Access:           PUBLIC
Parameter:        ISBN
Method:           PUT
*/

myApp.put("/books/update/:isbn", async (req, res) => {

  const updatedBook = await booksModel.findOneAndUpdate({
    ISBN: req.params.isbn
  }, {
    title: req.body.bookTitle
  }, {
    new: true
  });
  return res.json({
    books: updatedBook
  });
});

/* 
Route:         /publications/update/books
Description:   Update / add new publications
Access:        PUBLIC
Parameter:     isbn
Methods:       PUT
*/
myApp.put("/publications/update/books/:isbn", async (req, res) => {

  // Update the books database
  const updatedBookDatabase = await booksModel.findOneAndUpdate({
    ISBN: req.params.isbn
  }, {
    $addToSet: {
      publication: req.body.newPublication
    }
  }, {
    new: true
  });

    // Update the publications database
    const updatedPublicationDatabase = await publicationsModel.findOneAndUpdate({
      id: req.body.newPublication
    }, {
      $addToSet: {
        books: req.params.isbn
      }
    }, {
      new: true
    });
  
    return res.json({
      books: updatedBookDatabase,
      publications: updatedPublicationDatabase,
      message: "New publication was added !!!"
    });
  
  });

/--------- Delete Requests ----------/

/* 
Route:         /books/delete/
Description:   Delete a book
Access:        PUBLIC
Parameter:     isbn
Methods:       DELETE
*/
myApp.delete("/books/delete/:isbn", async (req, res) => {
  const updatedBookDatabase = await booksModel.findOneAndDelete({
    ISBN: req.params.isbn
  });

  return res.json({
    books: updatedBookDatabase
  });
});


/* 
Route:         /author/delete/
Description:   Delete an author
Access:        PUBLIC
Parameter:     id
Methods:       DELETE
*/
myApp.delete("/authors/delete/:id", async (req, res) => {

  const updatedAuthorDatabase = await authorsModel.findOneAndDelete({
    id: req.params.id
  });
  return res.json({
    author: updatedAuthorDatabase
  });
});


/* 
Route:         /books/delete/authors/
Description:   Delete author from book and related book from author
Access:        PUBLIC
Parameter:     isbn, authorId
Methods:       DELETE
*/
myApp.delete("/books/delete/author/:isbn/:authorId", (req, res) => {

  // Update the book database
  database.books.forEach((book) => {
    if (book.ISBN === req.params.isbn) {
      const newAuthorList = book.authors.filter(
        (eachAuthor) => eachAuthor !== parseInt(req.params.authorId)
      );
      book.authors = newAuthorList;
      return;
    };
  });

  // Update the author database
  database.authors.forEach((eachAuthor) => {
    if (eachAuthor.id === parseInt(req.params.authorId)) {
      const newBookList = eachAuthor.books.filter(
        (eachBook) => eachBook !== req.params.isbn
      );
      eachAuthor.books = newBookList;
      return;
    };
  });


  return res.json({
    Books: database.books,
    Authors: database.authors,
    message: "Successfully deleted the author"
  });
});


myApp.listen(3000, () => console.log("Server is up and running"));
