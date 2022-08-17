const libheader = document.getElementById("library-header")
const formBtn = document.getElementById("form-btn")
const formCont = document.getElementById("form-cont")
const addBtn = document.getElementById("addBtn")
const formBox = document.getElementById("form")

const mainCont = document.getElementById("main-cont")
const bookGrid = document.getElementById("book-grid")
// const bookCont = Array.from(document.getElementsByClassName("book-cont"))

const bookName = document.getElementById("name")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const readStatus = document.getElementById("toggle")

const wrapper = document.getElementById("toggle")




const modalColors = "rgba(0,0,0,0.1)"
const modalColors2 = "rgba(0,0,0,0.75)"


let library = []
let position = 0
let id = 0

class Book {
    constructor(name, author, pages, read) {
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
      element.lastChild.style.color = modalColors2
      element.lastChild.style.backgroundColor = modalColors

    })  
}



function display(mainBook) {
    
    
        let book = document.createElement("div")
        let name = document.createElement("h3")
        let author = document.createElement("h3")
        let pages  = document.createElement("h3")
        let readS = document.createElement("h3")
        let removeBtn = document.createElement("button")
        
        
        
        book.setAttribute("class", "book-cont")

        removeBtn.setAttribute("class", "removeBtn")
        removeBtn.innerText="Remove"
        removeBtn.addEventListener("click", (e) => {
            // console.log(e.target.parentNode.getAttribute("value"))
            // let bookContVal = e.target.parentNode.getAttribute("value")
            let element = e.target.parentNode
            element.remove()
            // library.splice(Number(bookContVal),1)
            library.forEach(element => console.log(element))

        })

        // name.innerText =  `"${library[position].name}"`
        // author.innerText = library[position].author
        // pages.innerText = library[position].pages
        // readS.innerText = library[position].read
        name.innerText =  `"${mainBook.name}"`
        author.innerText = mainBook.author
        pages.innerText = mainBook.pages
        readS.innerText = mainBook.read
  
    
        book.appendChild(name)
        book.appendChild(author)
        book.appendChild(pages)
        book.appendChild(readS)
        book.appendChild(removeBtn)

        bookGrid.appendChild(book)

}




addBtn.onclick = (e) => {
    
    // Create new class Book. Then push book to our array
    // Then run our display function based on the index we are at
    let readItem;
    (readStatus.checked === true) ? readItem = "Read" : readItem = "Not Read"

    let book = new Book(bookName.value, author.value, pages.value, readItem)
    library.push(book)
    display(book)
    
    // A form function which resets the values in the form 
    formBox.reset()
    
    //For debugging 
    library.forEach(element => console.log(element))
    
    //Moves our pointer ahead in our array 
    formCont.style.display = "none"
    libheader.style.backgroundColor = "whitesmoke"
    formBtn.style.backgroundColor = "whitesmoke"
    mainCont.style.backgroundColor = "white"
  
    
  let children = Array.from(bookGrid.children)
    children.forEach( element => {
      element.classList.remove("bookModalClass")
      element.classList.add("book-cont")
      element.lastChild.style.color = "purple"
      element.lastChild.style.backgroundColor = "white"

    })
  
    //Prevents the page from reloading after this button is clicked
    e.preventDefault()
}