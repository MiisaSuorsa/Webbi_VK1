// Luentovideosta katsottu esimerkki tähän if else
if(document.readyState !== "loading") {
    console.log("Document is ready!");
    buttonFunction();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Document is ready after waiting!");
        buttonFunction();
    })
}

//Luento videosta esimerkki napin painalluksen toiminnallisuudesta
function buttonFunction() {
    const button = document.getElementById("my-button");

    button.addEventListener("click", function() {
        console.log("hello world");
    })
}
