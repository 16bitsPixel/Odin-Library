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

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(book1.info());