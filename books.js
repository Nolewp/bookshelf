let form = document.getElementById("form");
let submit = document.getElementById("submit");
let exitForm = document.getElementById("close");
let msg = document.getElementById("msg");
let shelf = document.getElementById("bookCollection")
let getTitle = document.getElementById("title");
let getAuthor = document.getElementById("author");
let getRead = document.getElementById("readOrNot");
let showForm = document.getElementById("openForm")
let removeBtnArea = document.getElementById("removeBooks")
console.log("Hello World")
// local storage

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
if (storageAvailable('localStorage')) {
    console.log("hiza local storage")
}
else {
    console.log(storageAvailable(localStorage))
}

showForm.addEventListener("click", (e) => {
    openForm()
    console.log("show form")
})

exitForm.addEventListener("click", (e) => {
    closeForm();
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
    myLibrary["read"] = getRead.value;
    addBookToLibrary();
    clearForm()
}

function clearForm () {
    getAuthor.value = ''
    getTitle.value = ''
}

function addBookToLibrary() {
    shelf.innerHTML += `
    <a id="bookItem">
        <div id="book">

            <p id="titleGrid"> ${myLibrary.title}</p>
            <p id="byGrid">By: </p> <p id="authorGrid"> ${myLibrary.author}</p>
            <p id="readIt">${myLibrary.read}</p>
        
            <span class="options">
                <i onClick="editPost(this)" class="fas fa-edit"></i>
                <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
        </div>
    </a>`;
}
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    let children = e.parentElement.parentElement.children;
    getAuthor.value = children[2].firstChild.data;
    getTitle.value = children[0].firstChild.data;
    getRead.value = children[3].firstChild.data;
    e.parentElement.parentElement.parentElement.remove();
    openForm()
}

    if (shelf.innerHTML) {
        removeBtnArea.innerHTML = `
        <button id="removeAllBooks" onclick="removeAllBooks()">Remove  All Books</button>
        `
    }

let removeAllBooks = () => {
    localStorage.clear()
}

