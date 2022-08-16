const libheader = document.getElementById("library-header")
const formBtn = document.getElementById("form-btn")
const formCont = document.getElementById("form-cont")
const addBtn = document.getElementById("addBtn")

const formBox = document.getElementById("form")

const mainCont = document.getElementById("main-cont")
const bookGrid = document.getElementById("book-grid")
const bookCont = Array.from(document.getElementsByClassName("book-cont"))

const bookName = document.getElementById("name")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const readStatus = document.getElementById("toggle")

const modalColors = "rgba(0,0,0,0.1)"
const modalColors2 = "rgba(0,0,0,0.75)"


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
    libheader.style.backgroundColor = modalColors2
    mainCont.style.backgroundColor = modalColors2
    formBtn.style.backgroundColor = modalColors
    let children = Array.from(bookGrid.children)
        children.forEach( element => {
        element.classList.add("bookModalClass")
        element.classList.remove("book-cont")
    })
    

  // const bookCont = Array.from(document.getElementsByClassName("book-cont"))
    // bookCont.forEach(element => {
    //   console.log("THIS RAN")
    //   element.style.backgroundColor = "rgba(0,0,0,0.75)"
    // })
    
}

function display() {
    
    
        let book = document.createElement("div")
        let name = document.createElement("h3")
        let author = document.createElement("h3")
        let pages  = document.createElement("h3")
        // let readStatus  = document.createElement("div")
        let readS = document.createElement("h3")
        
        // This is to add toggle button to our grid item 
        // let readS = document.createElement("input")
        // let readS2 = document.createElement("label")
        
        
        // readStatus.setAttribute("class", "read-status")
        // readS.setAttribute("class", "switch")
        // readS2.setAttribute("class", "checkbox")
        
        book.setAttribute("class", "book-cont")

        name.innerText = library[position].name
        author.innerText = library[position].author
        pages.innerText = library[position].pages
        readS.innerText = library[position].read
        
  
        // readStatus.appendChild(readS)
        // readStatus.appendChild(readS2)
    
        book.appendChild(name)
        book.appendChild(author)
        book.appendChild(pages)
        book.appendChild(readS)
        // book.appendChild(readStatus)
        bookGrid.appendChild(book)

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
    formBtn.style.backgroundColor = "whitesmoke"
    mainCont.style.backgroundColor = "whitesmoke"
  
    
  let children = Array.from(bookGrid.children)
    children.forEach( element => {
      element.classList.remove("bookModalClass")
      element.classList.add("book-cont")
    })
  
    //Prevents the page from reloading after this button is clicked
    e.preventDefault()
}

