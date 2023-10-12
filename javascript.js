// to store books
const myLibrary = [];

// constructor for Book objects
function Book(title, author, numPages, readYet) {
    // book variables
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.readYet = readYet;

    // info function reports all book attributes
    this.info = function() {
        let output = title + " by " + author + ", " + numPages + " pages, ";
        if (readYet) {
            output += "read"
        }
        else {
            output += "not read yet";
        }
        return output;
    }
}

// adds a book to library
function addBookToLibrary(title, author, numPages, readYet) {
    let book = new Book(title, author, numPages, readYet);
    myLibrary.push(book);
}

// displays books onto page
function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        // create the card background
        let bookCard = document.createElement("div");
        bookCard.classList.add("card");

        // add text onto the card
        let titleText = document.createElement("p");
        titleText.textContent = myLibrary[i].title;
        let authorText = document.createElement("p");
        authorText.textContent = myLibrary[i].author;
        let pageText = document.createElement("p");
        pageText.textContent = myLibrary[i].numPages;
        let readButton = document.createElement("button");
        if (myLibrary[i].readYet) {
            readButton.textContent = "Read";
        }
        else {
            readButton.textContent = "Not Read";
        }

        bookCard.append(titleText);
        bookCard.append(authorText);
        bookCard.append(pageText);
        bookCard.append(readButton);

        document.querySelector(".library").append(bookCard);
    }
}

// reset book grid
function resetLibrary() {
    document.querySelector(".library").innerHTML = "";
}

// opens dialog when button clicked
document.querySelector(".newBookPopUp button").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("active");
    document.querySelector(".overlay").classList.add("active");
    document.querySelector(".addBookForm").classList.add("active");
});

// close dialog when click outside or escape key press
document.querySelector(".overlay").addEventListener("click", (e) => {
    document.querySelector(".modal").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active");
    document.querySelector(".addBookForm").classList.remove("active");
});
document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        document.querySelector(".modal").classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
        document.querySelector(".addBookForm").classList.remove("active");
    }
});

// add book to library with given submission info
document.querySelector(".addBookForm button").addEventListener("click", (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let numPages = document.getElementById("numPages").value;
    let isRead = document.getElementById("haveRead").checked;

    if (title != "" && author != "" && numPages > 0 && numPages <= 10000) {
        // add book to library
        addBookToLibrary(title, author, numPages, isRead);

        // reset and add book to visual grid
        resetLibrary();
        displayLibrary();

        // close modal
        document.querySelector(".modal").classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
        document.querySelector(".addBookForm").classList.remove("active");
    }
    else {
        return;
    }
});

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hobbit3", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hobbit4", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hobbit5", "J.R.R. Tolkien", 295, false);
displayLibrary();
