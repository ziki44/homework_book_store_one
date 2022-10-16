let navP = document.querySelector('.nav-p');
const searchInput = document.querySelector(".nav-input");
const searchButton = document.querySelector(".nav-button");
searchButton.addEventListener("click", validate);

let books = [
    {
        title: "Lalka",
        year: 2002,
        category: "novel",
        image: "https://image.ceneostatic.pl/data/products/50089449/i-lalka.jpg",
        alt: "Bolesław Prus - Lalka - picture",
        author: "Bolesław Prus"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        year: 1997,
        category: "fantasy novel",
        image: "http://prodimage.images-bn.com/pimages/9780545139700_p0_v5_s1200x630.jpg",
        alt: "J. K. Rowling - Harry Potter and the Philosopher's Stone - picture",
        author: "J. K. Rowling"
    },
    {
        title: "The Lord Of The Rings",
        year: 2012,
        category: "fantasy novel",
        image: "https://kbimages1-a.akamaihd.net/47047012-399c-4ae3-aade-cd4c2a10e8e7/1200/1200/False/the-fellowship-of-the-ring-the-lord-of-the-rings-book-1-1.jpg",
        alt: "J. R. R. Tolkien - The Lord Of The Rings - picture",
        author: "J. R. R. Tolkien"
    },
    {
        title: "Chyłka - Kasacja",
        year: 2022,
        category: "jail",
        image: "https://prod-bb-images.akamaized.net/imported-covers/9788379765751-bookbeat-.jpeg?w=320&q=85",
        alt: "Remigiusz Mróz - Chyłka - Kasacja - picture",
        author: "Remigiusz Mróz"
    }
]

let unOrderList = document.querySelector(".unorder-list");

books.forEach((item, index) => {
    unOrderList.innerHTML +=` 
    <li class="li">
        <p class="li-p li-title">Title: ${item.title}</p>
        <img class="li-img" src=${item.image} alt=${item.alt}></img>
        <p class="li-p">Author: ${item.author}</p>
        <p class="li-p">Release date: ${item.year}</p>
        <p class="li-p">Category: ${item.category}</p>
    </li>`
})

function openResizePage () {
    const windowProperties = "left=700px, top=300px, width=600, height=400"
    let win = window.open('/addBook.html', 'Add book', windowProperties )
}

function validate () {
    searchInput.value.length < 3 ? 
    navP.innerText = "Za mała ilość znaków!!!" : navP.innerText = ""    
} 
