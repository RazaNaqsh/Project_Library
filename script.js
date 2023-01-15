const bookTitle = document.getElementById("bookName").value;
const authorName = document.getElementById("authorName").value;
const bookPages = document.getElementById("bookPages").value;
const bookStatus = document.getElementById("bookStatus");
const addBtn = document.getElementById("submit");

if (bookStatus.checked === false) {
	console.log("not read");
} else console.log("read");

addBtn.addEventListener("click", () => {});

const Library = [];

function Book(name, pages, status) {
	this.name = name;
	this.pages = pages;
	this.status = status;
}

function addBookToLibrary() {}
addBookToLibrary();
