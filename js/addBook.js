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
            let storData = JSON.parse(localStorage.getItem("BOOKS"));
            storData.push({
                title: titleInput,
                year: yearInput,
                category: categoryInput,
                image: imageInput,
                alt: altInput,
                author: authorInput
            })
            localStorage.clear();
            localStorage.setItem("BOOKS", JSON.stringify(storData));
            alert("Dodano ksiązkę.");
            window.close();
       }

    }
);


