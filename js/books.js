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

document.getElementById("addBook").addEventListener("submit", function(e) {
    e.preventDefault()
    addBookToLibrary()
})

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

function displayLibrary() {
    if (myLibrary.length === 0){
        document.getElementById("library").innerHTML = "Your Library is empty! Add a new book below!";
    } else {
        for (let i = 0; i < myLibrary.length; i++) {
            // Create Card
            let card = document.createElement("div");
            card.classList.add = "card";
            // To create title text and display it inside card
            let bookTitle = document.createElement("p");
            bookTitle.classList.add = "title";
            let titleText = document.createTextNode(myLibrary[i].title)
            bookTitle.appendChild(titleText);
            card.appendChild(bookTitle);
            // To create author text and display it inside card
            let bookAuthor = document.createElement("p");
            bookAuthor.classList.add = "author";
            let authorText = document.createTextNode(myLibrary[i].author)
            bookAuthor.appendChild(authorText);
            card.appendChild(bookAuthor);
            // To create pages text and display it inside card
            let bookPages = document.createElement("p");
            bookPages.classList.add = "pages";
            let pagesText = document.createTextNode(myLibrary[i].pages)
            bookPages.appendChild(pagesText);
            card.appendChild(bookPages);
            // To create "read/not read" text and display it inside card
            let bookRead = document.createElement("p");
            bookRead.classList.add = "read";
            let readText = document.createTextNode(myLibrary[i].read)
            bookRead.appendChild(readText);
            card.appendChild(bookRead);

            // Display Library
            document.getElementById("library").append(card);
            
        }
    }
}

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read")
console.log(theHobbit.info())
// console.log(library.length)
// displayLibrary()