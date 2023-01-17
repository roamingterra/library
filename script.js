let myLibrary = [];

function Book(title, author, numOfPages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
}

function addBookToLibrary() {
  // Start working in the console, and transition to having a UI later
  // Take user input

  /* (Hide this for now)
  let title = prompt("Enter new book title:");
  let author = prompt("Enter new book author:");
  let numOfPages = prompt("Enter new book number of pages:");
  let read = prompt("Have you read the book? Yes or No?:"); // If I stick with this prompt, it will have to change to include the user typing yes or no in a different way
  */

  // Make new object from user input using the constructor
  // let object = new Book(title, author, numOfPages, read);

  // Populate library with a book for the time being
  let object1 = new Book();
  object1.title = "Harry Potter";
  object1.author = "J.K. Rowling";
  object1.numOfPages = 636;
  object1.read = "Yes";

  // Store new book object into array
  myLibrary.push(object1);

  // Populate library with another book for the time being
  let object2 = new Book();
  object2.title = "Waking Up";
  object2.author = "Sam Harris";
  object2.numOfPages = 300;
  object2.read = "Yes";

  // Store new book object into array
  myLibrary.push(object2);

  // THIS IS ALL WRONG, BECAUSE AFTER THE OBJECT IS STORED IN THE ARRAY,
  // I AM STILL MODIFYING THE OBJECT AND MAKING ANOTHER COPY OF THE SAME
  // OBJECT IN THE ARRAY. I NEED TO CREATE A NEW OBJECT, FILL IT WITH NEW BOOK INFO,
  // THEN STORE THAT NEW BOOK OBJECT INTO THE LIBRARY ARRAY
}

// Function to display book (displayed in the console for the time being)

function displayBooks() {
  let card = document.querySelector(".cards");
  // Create card container
  let cardContainer = document.createElement("div.card-container");
  // Style card container
  cardContainer.style.backgroundColor = "#171717";
  // Append card container as a child node in the cards class
  card.appendChild(cardContainer);

  // Create icon element
  // Create title element
  // Create pages element
  // Create author element
  // Append all elements as children nodes of the new card container
  // Style children nodes

  //   for (let i = 0; i < myLibrary.length; i++) {
  //     console.log(myLibrary[i]);
  //   }
}

let card = document.querySelector(".cards");

addBookToLibrary();

// displayBooks();
