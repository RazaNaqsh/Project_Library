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

function Book(name, author, pages) {
	this.title = name;
	this.author = author;
	this.pages = pages;
}

function addToList(book, index) {
	const row = document.createElement("tr");
	row.innerHTML = `<td data-index =${index}>${book.title}</td>
	<td data-index =${index}>${book.author}</td>
	<td data-index =${index}>${book.pages}</td>
	<td data-index =${index}><a href="#" data-index =${index} class="cancel">X</a></td>`;
	list.appendChild(row);
}

function RemoveBook() {
	const cancelBtnNode = document.querySelectorAll(".cancel");
	const cancelBtnArray = Array.from(cancelBtnNode);
	cancelBtnArray.forEach((cancelBtn) => {
		cancelBtn.addEventListener("click", (e) => {
			const elToRemove = e.target.parentElement.parentElement;
			elToRemove.remove();
		});
	});
}

addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const bookTitle = document.getElementById("bookName").value;
	const authorName = document.getElementById("authorName").value;
	const bookPages = document.getElementById("bookPages").value;
	const book = new Book(bookTitle, authorName, bookPages);
	Library.push(book);
	const indexBook = Library.indexOf(book);
	addToList(book, indexBook);
	RemoveBook();
});

Library.forEach((book) => {
	addToList(book, Library.indexOf(book));
});

RemoveBook();
