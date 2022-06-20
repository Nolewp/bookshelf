

let river = new Book("hemigway", "Up the river", 500);

let myLibrary = [river,];

function Book( author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}
Book.prototype.info = function() {
    return console.log("The title is " + this.title);
}

function addBookToLibrary() {
    var getTitle = document.getElementById("title").value;
    var getAuthor = document.getElementById("author").value;
    console.log("author " + getAuthor);
    
    let book1 = new Book(getAuthor, getTitle);
    console.log(book1.info());
}
