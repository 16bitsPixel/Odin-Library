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

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hobbit3", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hobbit4", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hobbit5", "J.R.R. Tolkien", 295, false);
displayLibrary();
