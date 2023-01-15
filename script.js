let authorName = document.getElementById("authorName").value;
let bookPages = document.getElementById("bookPages").value;
// const bookStatus = document.getElementById("bookStatus");
const addBtn = document.getElementById("submit");
const list = document.getElementById("bookList");

// if (bookStatus.checked === false) {
// 	console.log("not read");
// } else console.log("read");

const Library = [
	{
		title: "Solo Leveling",
		author: "Chugong",
		pages: 300,
		status: "read",
	},
	{
		title: "Tbate",
		author: "turtleMe",
		pages: 700,
		status: "read",
	},
	{
		title: "Classroom Of Elite",
		author: "Syougo Kinugasa",
		pages: 250,
		status: "read",
	},
];

addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const bookTitle = document.getElementById("bookName").value;
	const authorName = document.getElementById("authorName").value;
	const bookPages = document.getElementById("bookPages").value;
	const book = new Book(bookTitle, authorName, bookPages);
	Library.push(book);
	addToList(book);
});

Library.forEach((book) => {
	addToList(book);
});

function addToList(book) {
	const row = document.createElement("tr");
	row.innerHTML = `<td>${book.title}</td>
	<td>${book.author}</td>
	<td>${book.pages}</td>
	<td><a href="#" class="cancel">X</a></td>`;
	list.appendChild(row);
}
//constructor
function Book(name, author, pages) {
	this.title = name;
	this.author = author;
	this.pages = pages;
}
