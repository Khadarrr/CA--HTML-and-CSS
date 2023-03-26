const formEL = document.querySelector("#js-form");
const nameEL = document.querySelector("#js-name");
const mailEL = document.querySelector("#js-email");
const phoneEL = document.querySelector("#js-phone");
const messageEl = document.querySelector("#js-message");

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^((\+)?47)?[2-9]\d{7}$/;

formEL.addEventListener("submit", function(event){
    event.preventDefault();

    if (nameEL.value === "") {
        alert("Enter your name");
        nameInput.focus();
        return;
    }
    if (mailEL.value === "") {
        alert("Enter your email");
        mailEL.focus();
        return;
    }
    if (!emailRegex.test(mailEL.value)) {
        alert("Enter a valid email address.");
        mailEL.focus();
        return;
    }
    if (phoneEL.value === "") {
        alert("Enter your phone number");
        phoneEL.focus();
        return;
    }
    if (!phoneRegex.test(phoneEL.value)) {
        alert("Enter a valid phone-number.");
        phoneEL.focus();
        return;
    }
    if (messageEl.value === "") {
        alert("Enter your message");
        messageEl.focus();
        return;
    }

    formEL.submit();

    alert("The Form is now Sent");
});
