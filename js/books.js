let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
    get read() {
        return this._read;
    }

    set title(tValue) {
        this._title = tValue;
    }
    set author(aValue) {
        this._author = aValue;
    }
    set pages(pValue) {
        this._pages = pValue;
    }
    set read(rValue) {
        this._read = rValue;
    }

}

// function Book(title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//     this.info = function() {
//         return `${title} by ${author}, ${pages} pages, I have ${read} it.`
//     }
// }

document.getElementById("addBook").addEventListener("submit", function(e) {
    e.preventDefault()
    addBookToLibrary()
})

// To change read status of book
Book.prototype.toggleRead = function() {
    if (this.read == "Read") {
        this.read = "Not Read"
    } else {
        this.read = "Read"
    }

    // console.log(this.read)
    return this.read
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
    document.getElementById("addBook").reset();
    
    // console.table(myLibrary)
}

function displayLibrary() {
    // Clear #library innerHTML
    document.getElementById("library").innerHTML = "";
    if (myLibrary.length === 0){
        document.getElementById("library").innerHTML = "<p class='msg'>Your Library is empty! Add a new book!</p>";
    } else {
        for (let i = 0; i < myLibrary.length; i++) {
            // Create Card
            let card = document.createElement("div");
            card.classList.add("card");
            card.setAttribute("id", i);
            card.setAttribute("data-num", i);
            // To create title text and display it inside card
            let bookTitle = document.createElement("p");
            bookTitle.classList.add("title");
            let titleText = document.createTextNode(myLibrary[i].title)
            bookTitle.appendChild(titleText);
            card.appendChild(bookTitle);
            // To create author text and display it inside card
            let bookAuthor = document.createElement("p");
            bookAuthor.classList.add("author");
            let authorText = document.createTextNode(`by ${myLibrary[i].author}`)
            bookAuthor.appendChild(authorText);
            card.appendChild(bookAuthor);
            // To create pages text and display it inside card
            let bookPages = document.createElement("p");
            bookPages.classList.add("pages");
            let pagesText = document.createTextNode(`${myLibrary[i].pages} pages`)
            bookPages.appendChild(pagesText);
            card.appendChild(bookPages);
            // To create "read/not read" text and display it inside card
            let bookRead = document.createElement("p");
            bookRead.classList.add("read");
            let readText = document.createTextNode(myLibrary[i].read)
            bookRead.appendChild(readText);
            card.appendChild(bookRead);
            // Toggle read status button
            let button = document.createElement("button");
            button.classList.add("sec-btn");
            let btnText = document.createTextNode("Change Status")
            button.appendChild(btnText);
            button.addEventListener("click", function() {
                readText.nodeValue = myLibrary[i].toggleRead()});
            card.appendChild(button);
            // To create div to place change status btn by the read status
            let status = document.createElement("div");
            status.classList.add("together");
            status.appendChild(bookRead);
            status.appendChild(button);
            card.append(status);
            // Delete Book button
            let delButton = document.createElement("button");
            delButton.classList.add("sec-btn");
            let delText = document.createTextNode("Delete Book")
            delButton.appendChild(delText);
            delButton.addEventListener("click", function() {
                myLibrary.splice(i, 1)
                document.getElementById(i).remove();
                console.table(myLibrary)
                });
            card.appendChild(delButton);

            // Display Library
            if (!document.getElementById(i)) {
                document.getElementById("library").append(card);
            }
        }
    }
}