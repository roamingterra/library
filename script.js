let myLibrary = [];

class Book {
  constructor(title, author, numOfPages, read) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
    this.readToggle = function () {
      if (this.read === "YES") {
        this.read = "NO";
      } else if (this.read === "NO") {
        this.read = "YES";
      }
    };
  }
}

// Controls tbe New Book form
function addBook() {
  let formContainer = document.querySelector(".form-container");
  let buttonAddBook = document.querySelector(".add-book");
  let cancel = document.querySelector(".cancel");

  // When the user clicks on the Add Book button
  buttonAddBook.addEventListener("click", () => {
    formContainer.style.display = "flex";
  });

  // When the user clicks on <div class="cancel"> (x) element, close the modal window
  cancel.addEventListener("click", () => {
    const titleError = document.querySelector("#title-error");
    const authorError = document.querySelector("#author-error");
    const NumberOfPagesError = document.querySelector("#number-of-pages-error");

    formContainer.style.display = "none";
    titleError.style.visibility = "none";
    titleError.style.opacity = "0";
    authorError.style.visibility = "none";
    authorError.style.opacity = "0";
    NumberOfPagesError.style.visibility = "none";
    NumberOfPagesError.style.opacity = "0";
    form.reset();
  });

  // When the user clicks anywhere outside of the modal, close it
  document.addEventListener("click", (event) => {
    if (
      !event.target.closest(".form-container") && // The closest method looks for the parent .form-container when anything inside is clicked
      !event.target.matches(".add-book")
    ) {
      const titleError = document.querySelector("#title-error");
      const authorError = document.querySelector("#author-error");
      const NumberOfPagesError = document.querySelector(
        "#number-of-pages-error"
      );

      formContainer.style.display = "none";
      titleError.style.visibility = "none";
      titleError.style.opacity = "0";
      authorError.style.visibility = "none";
      authorError.style.opacity = "0";
      NumberOfPagesError.style.visibility = "none";
      NumberOfPagesError.style.opacity = "0";
      form.reset();
    }
  });
}

// Displays all books in library as cards in the UI
function displayBooks(removeBook) {
  let card = document.querySelector(".cards");

  // Clear the cards from the UI
  card.querySelectorAll("*").forEach((n) => n.remove());

  for (let i = 0; i < myLibrary.length; i++) {
    console.log(removeBook);

    // Create elements
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    let removeContainer = document.createElement("div");
    removeContainer.classList.add("remove-" + (i + 1));
    let remove = document.createTextNode("x");
    let titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    let title = document.createElement("div");
    let titleText = document.createTextNode(myLibrary[i].title);
    let read = document.createElement("img");
    read.classList.add(i + 1);
    let pages = document.createElement("div");
    let pagesText = document.createTextNode(myLibrary[i].numOfPages + " pages");
    let authorContainer = document.createElement("div");
    authorContainer.classList.add("author-container");
    let author = document.createElement("div");
    let authorText = document.createTextNode(myLibrary[i].author);

    if (myLibrary[i].read === "YES") {
      read.src = "images/check-mark-icon.png";
    } else if (myLibrary[i].read === "NO") {
      read.src = "images/x-icon.png";
    }

    // Append elements
    card.appendChild(cardContainer);
    cardContainer.appendChild(removeContainer);
    removeContainer.appendChild(remove);
    cardContainer.appendChild(titleContainer);
    titleContainer.appendChild(title);
    title.appendChild(titleText);
    cardContainer.appendChild(read);
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
    removeContainer.style.alignSelf = "flex-end";
    removeContainer.style.fontSize = "1.5rem";
    removeContainer.style.cursor = "pointer";
    titleContainer.style.width = "100%";
    titleContainer.style.height = "101px";
    title.style.fontSize = "1.7em";
    title.style.textAlign = "center";
    title.style.overflowWrap = "break-word";
    read.style.cursor = "pointer";
    pages.style.padding = "20px 0 20px 0";
    pages.style.fontSize = "1rem";
    authorContainer.style.width = "100%";
    authorContainer.style.height = "28.5px";
    author.style.fontSize = "1.5em";
    author.style.textAlign = "center";

    // Add animation to newly added book
    if (i === myLibrary.length - 1 && removeBook !== true) {
      cardContainer.style.animation = "createBox 0.5s, fadeIn 1s";
    }

    if (myLibrary[i].read === "YES") {
      title.style.color = "#39FF14";
      pages.style.color = "#39FF14";
      author.style.color = "#39FF14";
    } else if (myLibrary[i].read === "NO") {
      title.style.color = "red";
      pages.style.color = "red";
      author.style.color = "red";
    }

    // When x icon is clicked, book card is removed
    removeContainer.onclick = () => {
      const removeBook = true;
      let RegExp = /[0-9]*$/;
      myLibrary.splice(removeContainer.className.match(RegExp) - 1, 1);
      displayBooks(removeBook); // When a book is removed and remaining books from library are created, no animations to be applied
    };

    // When icon is clicked, the read status changes
    read.onclick = () => {
      if (myLibrary[read.className - 1].read === "YES") {
        myLibrary[read.className - 1].read = "NO";
        read.src = "images/x-icon.png";
        title.style.color = "red";
        pages.style.color = "red";
        author.style.color = "red";
      } else if (myLibrary[read.className - 1].read === "NO") {
        myLibrary[read.className - 1].read = "YES";
        read.src = "images/check-mark-icon.png";
        title.style.color = "#39FF14";
        pages.style.color = "#39FF14";
        author.style.color = "#39FF14";
      }
    };
  }
}

// Controls the new Book form
addBook();

// Displays all books in library as cards in the UI
displayBooks();

// Form input validations
const inputTitle = document.querySelector("input#title");
const inputAuthor = document.querySelector("input#author");
const inputNumberOfPages = document.querySelector("input#number-of-pages");

function checkTitleValidity() {
  const inputTitle = document.querySelector("input#title");
  const titleError = document.querySelector("#title-error");

  if (!inputTitle.checkValidity()) {
    titleError.style.visibility = "visible";
    titleError.style.opacity = "1";
    return false;
  } else if (inputTitle.checkValidity()) {
    titleError.style.visibility = "none";
    titleError.style.opacity = "0";
    return true;
  }
}

function checkAuthorValidity() {
  const inputAuthor = document.querySelector("input#author");
  const authorError = document.querySelector("#author-error");

  if (!inputAuthor.checkValidity()) {
    authorError.style.visibility = "visible";
    authorError.style.opacity = "1";
    return false;
  } else if (inputAuthor.checkValidity()) {
    authorError.style.opacity = "0";
    authorError.style.visibility = "none";
    return true;
  }
}

function checkNumberOfPagesValidity() {
  const inputNumberOfPages = document.querySelector("input#number-of-pages");
  const NumberOfPagesError = document.querySelector("#number-of-pages-error");

  if (!inputNumberOfPages.checkValidity()) {
    NumberOfPagesError.style.visibility = "visible";
    NumberOfPagesError.style.opacity = "1";
    return false;
  } else if (inputNumberOfPages.checkValidity()) {
    NumberOfPagesError.style.opacity = "0";
    NumberOfPagesError.style.visibility = "none";
    return true;
  }
}

inputTitle.addEventListener("input", checkTitleValidity);
inputAuthor.addEventListener("input", checkAuthorValidity);
inputNumberOfPages.addEventListener("input", checkNumberOfPagesValidity);

// Take user input
let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // If one of the required inputs is not valid, exit event handler and do not submit form
  if (
    !checkTitleValidity() ||
    !checkAuthorValidity() ||
    !checkNumberOfPagesValidity()
  ) {
    checkTitleValidity();
    checkAuthorValidity();
    checkNumberOfPagesValidity();

    if (!checkTitleValidity()) inputTitle.focus();
    else if (!checkAuthorValidity()) inputAuthor.focus();
    else if (!checkNumberOfPagesValidity()) inputNumberOfPages.focus();
    return;
  }

  // Make new object from user input using the constructor
  let object = new Book();
  object.title = form.elements["title"].value;
  object.author = form.elements["author"].value;
  object.numOfPages = form.elements["number-of-pages"].value;

  if (form.elements["read"].checked) {
    object.read = "YES";
  } else {
    object.read = "NO";
  }

  myLibrary.push(object);

  displayBooks();

  // When the user submits the form, the form closes and the user input gets cleared from the input elements
  let formContainer = document.querySelector(".form-container");

  formContainer.style.display = "none";
  form.reset();
});
