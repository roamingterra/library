let myLibrary = [];
// let myLibraryProperties = [];

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

  // Populate library with another book for the time being
  let object3 = new Book();
  object3.title = "Lord of the Rings";
  object3.author = "J.R. Tolkien";
  object3.numOfPages = 800;
  object3.read = "Yes";

  // Store new book object into array
  myLibrary.push(object3);

  // Populate library with another book for the time being
  let object4 = new Book();
  object4.title = "Lord of the Flies fellowship of";
  object4.author = "Some guy that w";
  object4.numOfPages = 400;
  object4.read = "Yes";

  // Store new book object into array
  myLibrary.push(object4);

  // THIS IS ALL WRONG, BECAUSE AFTER THE OBJECT IS STORED IN THE ARRAY,
  // I AM STILL MODIFYING THE OBJECT AND MAKING ANOTHER COPY OF THE SAME
  // OBJECT IN THE ARRAY. I NEED TO CREATE A NEW OBJECT, FILL IT WITH NEW BOOK INFO,
  // THEN STORE THAT NEW BOOK OBJECT INTO THE LIBRARY ARRAY
}

function addBook() {
  // Get the body
  let body = document.querySelector("body");

  // Get the modal window
  let formContainer = document.querySelector(".form-container");

  // Get the button that opens the modal window
  let buttonAddBook = document.querySelector(".add-book");

  // Get the element that closes the modal window
  let cancel = document.querySelector(".cancel");

  // When the user clicks on the button
  buttonAddBook.addEventListener("click", () => {
    formContainer.style.display = "flex";
  });

  // When the user clicks on <div class="cancel"> (x), close the modal window
  cancel.addEventListener("click", () => {
    formContainer.style.display = "none";
  });

  //   When the user clicks anywhere outside of the modal, close it
  document.addEventListener("click", (event) => {
    if (
      !event.target.closest(".form-container") && // The closest method looks for the parent .form-container when anything inside is clicked
      !event.target.matches(".add-book")
    ) {
      formContainer.style.display = "none";
      console.log(event.target);
    }
  });

  /*
  let button = document.querySelector(".add-book");
  button.addEventListener("click", () => {
    let body = document.querySelector("body");

    // Create elements
    let formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    let cancel = document.createElement("div");
    cancel.classList.add("cancel");
    let cancelText = document.createTextNode("x");

    let form = document.createElement("form");
    form.setAttribute("action", "script.js");
    form.setAttribute("method", "post");
    form.setAttribute("id", "form");

    let formTitle = document.createElement("div");
    formTitle.classList.add("form-title");
    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    let titleText = document.createTextNode("TITLE");
    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.required = true;
    titleInput.setAttribute("maxlength", "30");

    let formAuthor = document.createElement("div");
    formAuthor.classList.add("form-author");
    let authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author");
    let authorText = document.createTextNode("AUTHOR");
    let authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "author");
    authorInput.required = true;
    authorInput.setAttribute("maxlength", "15");

    let formNumberOfPages = document.createElement("div");
    formNumberOfPages.classList.add("form-number-of-pages");
    let numberOfPagesLabel = document.createElement("label");
    numberOfPagesLabel.setAttribute("for", "number-of-pages");
    let numberOfPagesText = document.createTextNode("NUMBER OF PAGES");
    let numberOfPagesInput = document.createElement("input");
    numberOfPagesInput.setAttribute("type", "number");
    numberOfPagesInput.setAttribute("id", "number-of-pages");
    numberOfPagesInput.required = true;
    numberOfPagesInput.setAttribute("min", "1");
    numberOfPagesInput.setAttribute("max", "10000");

    let formRead = document.createElement("div");
    formRead.classList.add("form-read");
    let readLabel = document.createElement("label");
    readLabel.setAttribute("for", "read");
    let readText = document.createTextNode("WAS THIS BOOK READ?");
    let checkBoxContainer = document.createElement("div");
    checkBoxContainer.classList.add("check-box-container");
    let yes = document.createElement("div");
    let yesText = document.createTextNode("YES");
    let readInput = document.createElement("input");
    readInput.setAttribute("type", "checkbox");
    readInput.setAttribute("name", "decision");
    readInput.setAttribute("id", "read");
    readInput.setAttribute("value", "YES");

    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submit");
    submitButton.setAttribute("form", "form");
    submitButton.setAttribute("onclick", "addBook()");
    let submitButtonText = document.createTextNode("SUBMIT");

    // Append elements
    body.appendChild(formContainer);
    formContainer.appendChild(cancel);
    cancel.appendChild(cancelText);

    formContainer.appendChild(form);

    form.appendChild(formTitle);

    formTitle.appendChild(titleLabel);
    titleLabel.appendChild(titleText);
    formTitle.appendChild(titleInput);

    form.appendChild(formAuthor);

    formAuthor.appendChild(authorLabel);
    authorLabel.appendChild(authorText);
    formAuthor.appendChild(authorInput);

    form.appendChild(formNumberOfPages);

    formNumberOfPages.appendChild(numberOfPagesLabel);
    numberOfPagesLabel.appendChild(numberOfPagesText);
    formNumberOfPages.appendChild(numberOfPagesInput);

    form.appendChild(formRead);

    formRead.appendChild(readLabel);
    readLabel.appendChild(readText);
    formRead.appendChild(checkBoxContainer);
    checkBoxContainer.appendChild(yes);
    yes.appendChild(yesText);
    checkBoxContainer.appendChild(readInput);

    form.appendChild(submitButton);
    submitButton.appendChild(submitButtonText);

    // Style elements
    cancel.style.position = "absolute";
    cancel.style.left = "385px";
    cancel.style.top = "5px";
    cancel.style.fontSize = "2rem";
    cancel.style.cursor = "pointer";

    formContainer.style.display = "flex";
    formContainer.style.justifyContent = "center";
    formContainer.style.alignItems = "center";
    formContainer.style.position = "absolute";
    formContainer.style.top = "54vh";
    formContainer.style.left = "50vw";
    formContainer.style.marginTop = "-150px";
    formContainer.style.marginLeft = "-210px";
    formContainer.style.width = "420px";
    formContainer.style.height = "300px";
    formContainer.style.zIndex = "100";
    formContainer.style.borderRadius = "20px";
    formContainer.style.backgroundColor = "#ff6c00";

    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.alignItems = "center";
    form.style.justifyContent = "center";
    form.style.gap = "10px";

    formChildren = document.querySelector("form").children;

    for (let i = 0; i < formChildren.length; i++) {
      formChildren[i].style.display = "flex";
      formChildren[i].style.flexDirection = "column";
    }

    numberOfPagesInput.style.width = "139px";

    formRead.style.gap = "5px";

    checkBoxContainer.style.display = "flex";
    checkBoxContainer.style.justifyContent = "center";

    readInput.style.cursor = "pointer";

    submitButton.style.borderRadius = "50px";
    submitButton.style.padding = "10px";
    submitButton.style.fontFamily = "RobotoCondensedBold";
    submitButton.style.fontSize = "1rem";
    submitButton.style.backgroundColor = "white";
    submitButton.style.color = "#171717";
    submitButton.style.border = "0";

    submitButton.addEventListener("mouseenter", () => {
      submitButton.style.backgroundColor = "#171717";
      submitButton.style.color = "white";
    });

    submitButton.addEventListener("mouseleave", () => {
      submitButton.style.backgroundColor = "white";
      submitButton.style.color = "#171717";
    });

    submitButton.addEventListener("mousedown", () => {
      submitButton.style.backgroundColor = "white";
      submitButton.style.color = "#171717";
    });

    submitButton.addEventListener("mouseup", () => {
      submitButton.style.backgroundColor = "#171717";
      submitButton.style.color = "white";
    });
  });
  */
}

function displayBooks() {
  let card = document.querySelector(".cards");

  for (let i = 0; i < myLibrary.length; i++) {
    // Create elements
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    let iconContainer = document.createElement("div");
    iconContainer.classList.add("icon");
    let icon = document.createTextNode("x");
    let titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    let title = document.createElement("div");
    let titleText = document.createTextNode(myLibrary[i].title);
    let pages = document.createElement("div");
    let pagesText = document.createTextNode(myLibrary[i].numOfPages);
    let authorContainer = document.createElement("div");
    authorContainer.classList.add("author-container");
    let author = document.createElement("div");
    let authorText = document.createTextNode(myLibrary[i].author);

    // Append elements
    card.appendChild(cardContainer);
    cardContainer.appendChild(iconContainer);
    iconContainer.appendChild(icon);
    cardContainer.appendChild(titleContainer);
    titleContainer.appendChild(title);
    title.appendChild(titleText);
    cardContainer.appendChild(pages);
    pages.appendChild(pagesText);
    cardContainer.appendChild(authorContainer);
    authorContainer.appendChild(author);
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
    titleContainer.style.width = "100%";
    titleContainer.style.height = "101px";
    title.style.fontSize = "1.7em";
    title.style.textAlign = "center";
    pages.style.padding = "0 0 40px 0";
    pages.style.fontSize = "1rem";
    authorContainer.style.width = "100%";
    authorContainer.style.height = "28.5px";
    author.style.fontSize = "1.5em";
    author.style.textAlign = "center";
  }
}

addBookToLibrary();

displayBooks();

addBook();
