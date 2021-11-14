// Temporary database

let books = [
  {
    ISBN: "12345ONE",
    title: "The Marvel Book",
    pubDate: "2021-08-20",
    language: "en",
    numOfPages: 300,
    authors: [1, 2],
    publication: [1],
    category: ["fiction", "science fantasy", "space opera", "action"]
  },
  {
    ISBN: "12345TWO",
    title: "MERN Stack Complete Guide",
    pubDate: "2021-08-20",
    language: "en",
    numOfPages: 225,
    authors: [1],
    publication: [1],
    category: ["tech stack", "web dev", "full stack"]
  },
];

let authors = [
  {
    id: 1,
    name: "Stan Lee",
    books: ["12345ONE", "123bookX"]
  },
  {
    id: 2,
    name: "Ganeshkumar",
    books: ["12345ONE"]
  },
];

let publications = [
  {
    id: 1,
    name: "MCU Publications",
    books: ["12345ONE"]
  },
  {
    id: 2,
    name: "GK Publications",
    books: ["12345TWO"]
  },
  {
    id: 3,
    name: "SpaceX Publications",
    books: []
  },
];

module.exports = { books, authors, publications };
