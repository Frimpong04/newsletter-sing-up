
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

// signup container
// const signupContainer = document.querySelector(".signup-container");

// event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // validation check
    if(emailInput.value && emailInput.value.includes("@")) {
        popupMessage.classList.add("show");
        console.log(popupMessage);
        emailInput.textContent = "";
        emailInput.value="";

    } else {
        errorMessage.style.visibility = "visible";
        emailInput.classList.add("error-state");
        // submitButton.style.backgroundColor = "gray";
        submitButton.classList.add("error-active");

        emailInput.addEventListener("focus", () => {
            errorMessage.style.visibility = "hidden";
            emailInput.classList.remove("error-state")
            submitButton.classList.remove("error-active");
        })
    }

    console.log("submit");
});

dismissButton.addEventListener("click", () => {
    popupMessage.style.display = "none";
})