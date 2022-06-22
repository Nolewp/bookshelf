let form = document.getElementById("form");
let submit = document.getElementById("submit");
let msg = document.getElementById("msg");
let shelf = document.getElementById("bookCollection")
let getTitle = document.getElementById("title");
let getAuthor = document.getElementById("author");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit");

    formEval();
});

function formEval() {
    if (getAuthor.value === "" || getTitle.value === "") {
        msg.innerHTML = "Author and Title need to be filled in";
        console.log("form not filled in")
    }
    else {
        console.log("successs");
        msg.innerHTML = "";
        acceptData();
    }
}

let myLibrary = {};

function acceptData() {
    myLibrary["author"] = getAuthor.value;
    myLibrary["title"] = getTitle.value;
    addBookToLibrary();
}

function addBookToLibrary() {
    shelf.innerHTML += 
    `<div id="book">
        <div>
            <p>${myLibrary.title}</p>
            <p>${myLibrary.author}</p>
        </div>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>`;
}
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };

  let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  }



// let river = new Book("hemigway", "Up the river", 500);




// function Book( author, title, pages) {
//     this.author = author;
//     this.title = title;
//     this.pages = pages;
// }
// Book.prototype.info = function() {
//     return console.log("The title is " + this.title);
// }

// function addBookToLibrary() {

//     console.log("author " + getAuthor);
    
//     let book1 = new Book(getAuthor, getTitle);
//     console.log(book1.info());
// }
