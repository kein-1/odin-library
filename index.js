const libheader = document.getElementById("library-header")
const formBtn = document.getElementById("form-btn")
const formCont = document.getElementById("form-cont")
const addBtn = document.getElementById("addBtn")

const formBox = document.getElementById("form")

const mainCont = document.getElementById("main-cont")
const bookCont = document.getElementById("book-grid")

const bookName = document.getElementById("name")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const readStatus = document.getElementById("read-status")



let library = []
let position = 0

class Book {
    constructor(name, author, pages, read = "false") {
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
    libheader.style.backgroundColor = "rgba(0,0,0,0.75)"
    mainCont.style.backgroundColor = "rgba(0,0,0,0.75)"
}

function display() {
    
    
        let book = document.createElement("div")
        let name = document.createElement("h3")
        let author = document.createElement("h3")
        let pages  = document.createElement("h3")
        let readS = document.createElement("h3")

        book.setAttribute("class", "book-cont")

        name.innerText = library[position].name
        author.innerText = library[position].author
        pages.innerText = library[position].pages
        readS.innerText = library[position].read


        book.appendChild(name)
        book.appendChild(author)
        book.appendChild(pages)
        book.appendChild(readS)
        bookCont.appendChild(book)

}

addBtn.onclick = (e) => {
    
    // Create new class Book. Then push book to our array
    // Then run our display function based on the index we are at


    let book = new Book(bookName.value, author.value, pages.value,readStatus.checked)
    library.push(book)
    display()
    
    // A form function which resets the values in the form 
    formBox.reset()
    
    //For debugging 
    library.forEach(element => console.log(element))
    console.log(`Current size of library is ${library.length}. We are at position ${position}`)
    
    //Moves our pointer ahead in our array 
    position+=1
    formCont.style.display = "none"
    libheader.style.backgroundColor = "white"
    mainCont.style.backgroundColor = "whitesmoke"

    //Prevents the page from reloading after this button is clicked
    e.preventDefault()
}


