const formEL = document.querySelector("#js-form");
const nameEL = document.querySelector("#js-name");
const mailEL = document.querySelector("#js-email");
const addressEl = document.querySelector("#js-address");
const cityEl = document.querySelector("#js-city");
const countryEl = document.querySelector("#js-country");

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

formEL.addEventListener("submit", function(event){
    event.preventDefault();

    if (nameEL.value === "") {
        alert("Enter your name");
        nameInput.focus();
        return;
      }
    if (mailEL.value === "") {
        alert("Enter your E-mail");
        nameInput.focus();
        return;
      }
      if (!emailRegex.test(mailEL.value)) {
        alert("Enter a valid email address.");
        emailInput.focus();
        return;
      }
    if (addressEl.value === "") {
        alert("Enter your Address");
        nameInput.focus();
        return;
      }
    if (cityEl.value === "") {
        alert("Enter your City");
        nameInput.focus();
        return;
      }
    if (countryEl.value === "") {
        alert("Enter Country");
        nameInput.focus();
        return;
      }

      formEL.submit();
});