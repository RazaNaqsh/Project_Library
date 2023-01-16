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
		status: "notRead",
	},
	{
		title: "Tbate",
		author: "turtleMe",
		pages: 700,
		status: "notRead",
	},
	{
		title: "Classroom Of Elite",
		author: "Syougo Kinugasa",
		pages: 250,
		status: "Read",
	},
];

function Book(name, author, pages) {
	this.title = name;
	this.author = author;
	this.pages = pages;
}

function addToList(book, index, status) {
	const row = document.createElement("tr");
	let tick;
	if (status === true) tick = "checked";
	row.innerHTML = `<td data-index =${index}>${book.title}</td>
	<td data-index =${index}>${book.author}</td>
	<td data-index =${index}>${book.pages}</td>
	<td data-index =${index}><input type="checkbox" class="readStatus" ${tick}></td>
	<td data-index =${index}><a href="#" data-index =${index} class="cancel">X</a></td>`;
	list.appendChild(row);
}

function RemoveBook() {
	const cancelBtnArray = Array.from(document.querySelectorAll(".cancel"));
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
	const status = document.getElementById("bookStatus");
	const book = new Book(bookTitle, authorName, bookPages);

	Library.push(book);
	const indexBook = Library.indexOf(book);
	addToList(book, indexBook, status.checked);
	RemoveBook();
	document.getElementById("bookName").value = "";
	document.getElementById("authorName").value = "";
	document.getElementById("bookPages").value = 0;
});

Library.forEach((book) => {
	addToList(book, Library.indexOf(book), book.status === "Read");
});

RemoveBook();
const bookStatus = Array.from(document.querySelectorAll(".readStatus"));
bookStatus.forEach((bookstat) => {
	bookstat.addEventListener("click", (e) => {
		const readIndex = e.target.parentElement.getAttribute("data-index");
		if (bookstat.checked === true) {
			Library[readIndex].status = "Read";
		} else {
			Library[readIndex].status = "notRead";
		}
		console.log(Library);
	});
});
