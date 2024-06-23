
// elements
// erro element
const errorMessage = document.getElementById("error");

// email input
const emailInput = document.getElementById("email");

// submit button
const submitButton = document.getElementById("submit-button");

// success page
const popupMessage = document.getElementById("popup");

// form
const form = document.getElementById("form");

// dismiss button
const dismissButton = document.getElementById("dismiss-button");


// event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // validation check
    if(emailInput.value && emailInput.value.includes("@")) {
        popupMessage.classList.add("show");
        console.log(popupMessage);
        emailInput.textContent = "";
    }else {
        errorMessage.style.visibility = "visible";
    }

    console.log("submit");
});

dismissButton.addEventListener("click", () => {
    popupMessage.style.display = "none";
})