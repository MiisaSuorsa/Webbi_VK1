// Luentovideosta katsottu esimerkki tähän if else
if(document.readyState !== "loading") {
    console.log("Document is ready!");
    buttonFunction1();
    //buttonFunction2();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Document is ready after waiting!");
        buttonFunction1();
        //buttonFunction2();
    })
}

//Luento videosta esimerkki napin painalluksen toiminnallisuudesta
function buttonFunction1() {
    const button = document.getElementById("my-button");

    button.addEventListener("click", function() {
        console.log("hello world");
        
    })
}

//https://www.w3schools.com/jsref/prop_html_innerhtml.asp
/*function changeText() {
    document.getElementById("hello").innerHTML = "My notebook";
}
*/
/*
function buttonFunction2() {
    const button = document.getElementById("my-button");

    button.addEventListener("click", function() {
        console.log("hello world");
        //T3
        //changeText();
        //document.getElementById("hello").innerHTML = "My notebook";
        const hText = document.getElementById("hello");
        /*
        if (hText.innerHTML=="Hello world"){
            hText.innerHTML = "My notebook";
        }
        else{
            hText.innerHTML = "Hello world";
        }
        
        hText.innerHTML = "kakka";
        
    })
}*/