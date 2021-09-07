let myLibrary = [];
var main = document.querySelector('#main')

function clearBookElements(){
    let allBooks = document.querySelectorAll('.book')
    allBooks.forEach((book) => {
        main.removeChild(book)
    })
}

class Books {
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    info = () => {
        let hasRead = 'has not been read yet.'
        if (this.read) hasRead = 'has been read.'
        return (this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + hasRead)
    }  
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

function createNewBook(){
    let elemVis = document.querySelectorAll('.nvis')
    elemVis.forEach((item) => {
        item.classList.remove('nvis')
        item.classList.add('vis')
    })
}

function doSubmitBook(){

    let sTitle = document.getElementById('ftitle').value
    let sAuthor = document.getElementById('fauthor').value
    let sPages = document.getElementById('fpages').value
    let sRead = document.getElementById('fread').value

    let myBook = new Books(sTitle, sAuthor, sPages, sRead)

    document.getElementById('ftitle').value = ''
    document.getElementById('fauthor').value = ''
    document.getElementById('fpages').value = ''
    document.getElementById('fread').value = ''

    let elemVis = document.querySelectorAll('.vis')
    elemVis.forEach((item) => {
        item.classList.remove('vis')
        item.classList.add('nvis')
    })
    addBookToLibrary(myBook)
    clearBookElements()
    displayBooks(myLibrary)
}

function displayBooks(libraryList){
    libraryList.forEach((book) => {
        let currentCard = document.createElement('div')
        currentCard.classList.add('book')
        let titleName = document.createElement('div')
        titleName.textContent = 'Title: ' + `${book.title}`
        let authorName = document.createElement('div')
        authorName.textContent = 'Author: ' + `${book.author}`
        let pagesTotal = document.createElement('div')
        pagesTotal.textContent = 'Pages: ' + `${book.pages}`
        let isRead = document.createElement('div')
        isRead.textContent = 'Is read?: ' + `${book.read}`
        let readButton = document.createElement('button')
        readButton.textContent = 'Read'
        readButton.addEventListener('click', () => {
            if (book.read == true){
                book.read = false;
            } else {
                book.read = true;
            }
            isRead.textContent = 'Is read?: ' + `${book.read}`
        })
        let items = [titleName, authorName, pagesTotal, isRead, readButton]
        items.forEach((item) => currentCard.appendChild(item))
        main.appendChild(currentCard)
    })
}

var newBk = document.getElementById('newbook')
newBk.addEventListener('click', () => {
    createNewBook()
})

var submitBk = document.getElementById('submitBook')
submitBk.addEventListener('click', () => {
    doSubmitBook()
})

var newBook = new Books('Mr Sister', 'Me', '255', false)
addBookToLibrary(newBook)

var anotherBook = new Books('Ms Brother', 'Me', '266', false)
addBookToLibrary(anotherBook)

displayBooks(myLibrary)