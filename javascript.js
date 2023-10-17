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

        // add a colored part to card
        let bookCardColored = document.createElement("div");
        bookCardColored.classList.add("colorCard");

        let titleText = document.createElement("p");
        titleText.textContent = myLibrary[i].title;
        titleText.classList.add("titleText");

        let authorText = document.createElement("p");
        authorText.textContent = "By: " + myLibrary[i].author;
        authorText.classList.add("authorText");

        let pageText = document.createElement("p");
        pageText.textContent = myLibrary[i].numPages + " Pages";
        pageText.classList.add("pageText");

        let readButton = document.createElement("button");
        readButton.classList.add("readButton");
        if (myLibrary[i].readYet) {
            readButton.textContent = "Read";
            readButton.classList.add("read");
        }
        else {
            readButton.textContent = "Not Read";
            readButton.classList.add("notRead");
        }

        // changes read status when button is clicked
        readButton.addEventListener("click", () => {
            if (readButton.textContent == "Read") {
                readButton.textContent = "Not Read";
            }
            else {
                readButton.textContent = "Read";
            }
            readButton.classList.toggle("read");
            readButton.classList.toggle("notRead");
        });

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteButton");

        // deletes card when button is clicked
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            resetLibrary();
            displayLibrary();
        });

        bookCard.append(bookCardColored);
        bookCard.append(titleText);
        bookCard.append(authorText);
        bookCard.append(pageText);
        bookCard.append(readButton);
        bookCard.append(deleteButton);

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

addBookToLibrary("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 1092, false);
displayLibrary();
