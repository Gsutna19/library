let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, I have ${read} it.`
    }
}

function addBookToLibrary() {
    newTitle = document.getElementById("title").value;
    newAuthor = document.getElementById("author").value;
    newPages = document.getElementById("pages").value;

    if (document.getElementById("y").checked) {
        newRead = document.getElementById("y").value;
    } else if (document.getElementById("n").checked) {
        newRead = document.getElementById("n").value;
    }

    const newBook = new Book(newTitle, newAuthor, newPages, newRead)

    myLibrary.push(newBook)

    console.table(myLibrary)
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read")
console.log(theHobbit.info())