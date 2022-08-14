
const formBtn = document.getElementById("form-btn")
const formCont = document.getElementById("form-cont")
const addBtn = document.getElementById("addBtn")

const formBox = document.getElementById("form")
const bookName = document.getElementById("name")
const author = document.getElementById("author")
const pages = document.getElementById("pages")

let library = []

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
    // document.body.style.backgroundColor = "black"
    // document.body.style.opacity = "0.5"
}

addBtn.onclick = (e) => {
    
    console.log(bookName.value, author.value, pages.value);
    let book = new Book(bookName.value, author.value, pages.value)
    library.push(book)
    formBox.reset()
    
    library.forEach(element => console.log(element))

    formCont.style.display = "none"
    e.preventDefault()
}


