let navbar  = document.querySelector(".navbar");

let menubtn = document.querySelector("#menu-btn").addEventListener('click' , ()=>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchBar.classList.remove("active");
})

let cartItem  = document.querySelector(".cart-items-container");
document.querySelector("#cart").addEventListener("click",()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchBar.classList.remove("active");
})

let searchBar = document.querySelector(".search-form");
document.querySelector("#search-btn").addEventListener("click",()=>{
    searchBar.classList.toggle('active');
    cartItem.classList.remove("active");
    navbar.classList.remove('active');
})

window.onscroll = ()=>{
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
    cartItem.classList.remove('active');
}

// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("contactForm");
//     const usernameInput = document.getElementById("username");
//     const emailInput = document.getElementById("email");
//     const passwordInput = document.getElementById("password");

//     usernameInput.addEventListener("blur", validateUsername);
//     emailInput.addEventListener("blur", validateEmail);
//     passwordInput.addEventListener("blur", validatePassword);

//     form.addEventListener("submit", function(event) {
//         if (!validateUsername() || !validateEmail() || !validatePassword()) {
//             event.preventDefault();
//         }
//     });

//     function validateUsername() {
//         const username = usernameInput.value;
//         const usernameError = document.getElementById("usernameError");
//         if (username.length < 3) {
//             usernameError.style.display = "block";
//             return false;
//         } else {
//             usernameError.style.display = "none";
//             return true;
//         }
//     }

//     function validateEmail() {
//         const email = emailInput.value;
//         const emailError = document.getElementById("emailError");
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(email)) {
//             emailError.style.display = "block";
//             return false;
//         } else {
//             emailError.style.display = "none";
//             return true;
//         }
//     }

//     function validatePassword() {
//         const password = passwordInput.value;
//         const passwordError = document.getElementById("passwordError");
//         if (password.length < 6) {
//             passwordError.style.display = "block";
//             return false;
//         } else {
//             passwordError.style.display = "none";
//             return true;
//         }
//     }
// });