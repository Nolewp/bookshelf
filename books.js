let form = document.getElementById("form");
let submit = document.getElementById("submit");
let msg = document.getElementById("msg");
let shelf = document.getElementById("bookCollection")
let getTitle = document.getElementById("title");
let getAuthor = document.getElementById("author");
let showForm = document.getElementById("openForm")

showForm.addEventListener("click", (e) => {
    openForm()
    console.log("show form")
})

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


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
        closeForm()

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

    <p> ${myLibrary.title}</p>
    By: <p> ${myLibrary.author}</p>
     
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
    let children = e.parentElement.parentElement.children;
    getAuthor.value = children[1].firstChild.data;
    getTitle.value = children[0].firstChild.data;
    e.parentElement.parentElement.remove();
  }

