import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//----------------
// Luentovideosta katsottu esimerkki tähän if else
if(document.readyState !== "loading") {
    console.log("Document is ready!");
    buttonFunction();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Document is ready after waiting!");
        buttonFunction();
        addToList();
    })
}

//Luento videosta esimerkki napin painalluksen toiminnallisuudesta
function buttonFunction() {
    const button = document.getElementById("my-button");

    button.addEventListener("click", function() {
        console.log("hello world");
        const hText = document.getElementById("hello");
        hText.innerHTML = "My notebook";
        
    })
}

function addToList() {
    const addButton = document.getElementById("add-data");
    
    addButton.addEventListener("click", function() {
        var ul_list = document.getElementById("list");
        var list_item = document.createElement("li");
        list_item.appendChild(document.createTextNode("random text"));
        ul_list.appendChild(list_item);
    })
}
