const Library = [];

function Book(name, pages, status) {
	this.name = name;
	this.pages = pages;
	this.status = status;
}
// Book.prototype.info = function () {
// 	return `${this.name} `
// }
function addBookToLibrary() {
	// const bookName = prompt("Enter bookName");
	// const bookPages = parseInt(prompt("enter pages"));
	// const bookStatus = prompt("Read or UnRead?");
	// const book = new Book(bookName, bookPages, bookStatus);
	const book = new Book("The Hobbit", 250, "yes");
	const book2 = new Book("The bobby", 250, "yes");
	// console.log(book);
	Library.push(book);
	Library.push(book2);
}
addBookToLibrary();
function showCase() {
	// console.log(Library);
	Library.forEach((book) => console.table(book));
}

showCase();
