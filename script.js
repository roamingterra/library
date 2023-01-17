let myLibrary = [];

function Book(title, author, numOfPages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
  this.giveBookInfo = function () {
    return title + " by " + author + ", " + numOfPages + ", " + read;
  };
}

function addBookToLibrary() {
  // Start working in the console, and transition to having a UI later
  // Take user input
  let title = prompt("Enter new book title:");
  let author = prompt("Enter new book author:");
  let numOfPages = prompt("Enter new book number of pages:");
  let read = prompt("Have you read the book? Yes or No?:"); // If I stick with this prompt, it will have to change to include the user typing yes or no in a different way
  // Make new object from user input using the constructor
  let object = new Book(title, author, numOfPages, read);
  // Store new book object into array
  myLibrary.push(object);
}

addBookToLibrary();
