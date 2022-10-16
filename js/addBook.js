const form = document.querySelector("form");
const insertButton = document.querySelector(".form-submit-button");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleInput = document.querySelector(".form-input-title").value;
    const yearInput = document.querySelector(".form-input-year").value;
    const categoryInput = document.querySelector(".form-input-category").value;
    const imageInput = document.querySelector(".form-input-image").value;
    const altInput = document.querySelector(".form-input-alt").value;
    const authorInput = document.querySelector(".form-input-author").value;

    if (!titleInput && !yearInput && !categoryInput && !imageInput && !altInput && !authorInput) {
        document.querySelector("#form-validation-p").innerText = "Please complete all fields!!!"
    } else {
        let newBook = [];
        let newBookString = [];
        newBook.push({
            title: titleInput,
            year: yearInput,
            category: categoryInput,
            image: imageInput,
            alt: altInput,
            author: authorInput
        });
        newBookString = JSON.stringify(newBook);
        if (!localStorage.getItem("BOOKS")) {
            console.log(1)
            localStorage.setItem("BOOKS", newBookString);
            alert("Dodano ksiązkę.");
            window.close();
        } else {
            console.log(2)
            let storData = JSON.parse(localStorage.getItem("BOOKS"));
            storData.push({
                title: titleInput,
                year: yearInput,
                category: categoryInput,
                image: imageInput,
                alt: altInput,
                author: authorInput
            })
            let stringArr = JSON.stringify(storData);
            localStorage.clear();
            localStorage.setItem("BOOKS", stringArr);
            alert("Dodano ksiązkę.");
            window.close();
        }

    }
});


