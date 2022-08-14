
const formBtn = document.getElementById("form-btn")
const formCont = document.getElementById("form-cont")
const addBtn = document.getElementById("addBtn")

const formBox = document.getElementById("form")
const bookName = document.getElementById("name")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const mainCont = document.getElementById("main-cont")
const bookCont = document.getElementById("book-grid")

let library = []
let position = 0

class Book {
    constructor(name, author, pages, read = "False") {
        this.name = name
        this.author = author
        this.pages = pages
        this.read = read
    }

    getter = () => {
        console.log(`Info on books: ${this.name} ${this.author} ${this.pages} `)
    }
}

formBtn.onclick = () => {
    formCont.style.display = "flex"
    // formCont.style.backgroundColor = "black"
    // document.body.style.opacity = "0.5"
}

function display() {
    
    
        let book = document.createElement("div")
        let name = document.createElement("h3")
        let author = document.createElement("h3")
        let pages  = document.createElement("h3")

        book.setAttribute("class", "book-cont")

        name.innerText = library[position].name
        author.innerText = library[position].author
        pages.innerText = library[position].pages


        book.appendChild(name)
        book.appendChild(author)
        book.appendChild(pages)
        bookCont.appendChild(book)

}

addBtn.onclick = (e) => {
    
    console.log(bookName.value, author.value, pages.value);
    let book = new Book(bookName.value, author.value, pages.value)
    library.push(book)
    display()
    
    formBox.reset()
    
    library.forEach(element => console.log(element))
    console.log(`Current size of library is ${library.length}. We are at position ${position}`)
    position+=1
    formCont.style.display = "none"
    e.preventDefault()
}


