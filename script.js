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

  // Create elements
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  let iconContainer = document.createElement("div");
  iconContainer.classList.add("icon");
  let icon = document.createTextNode("x");
  let title = document.createElement("div");
  title.classList.add("title");
  let titleText = document.createTextNode("Title");
  let pages = document.createElement("div");
  let pagesText = document.createTextNode("Pages");
  let author = document.createElement("div");
  let authorText = document.createTextNode("Author");

  // Append elements
  card.appendChild(cardContainer);
  cardContainer.appendChild(iconContainer);
  iconContainer.appendChild(icon);
  cardContainer.appendChild(title);
  title.appendChild(titleText);
  cardContainer.appendChild(pages);
  pages.appendChild(pagesText);
  cardContainer.appendChild(author);
  author.appendChild(authorText);

  // Style elements
  cardContainer.style.display = "flex";
  cardContainer.style.flexDirection = "column";
  cardContainer.style.alignItems = "center";
  cardContainer.style.padding = "5px 20px 20px 20px";
  cardContainer.style.color = "white";
  cardContainer.style.backgroundColor = "#171717";
  iconContainer.style.alignSelf = "flex-end";
  iconContainer.style.fontSize = "1.5rem";
  title.style.fontSize = "3rem";
  pages.style.padding = "40px 0";
  author.style.fontSize = "1.5rem";
}

addBookToLibrary();

displayBooks();
