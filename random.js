//import HTML Item 
const UIform = document.querySelector(".card");
const inpot1 = document.getElementById("b1");
const inpot2 = document.querySelector(".inbt2");
const btn = document.querySelector(".sbmit");
const UIAddname = document.querySelector(".addName");


//Event Handeler 

UIAddname.addEventListener("click", addNametext)


// functions 

function addNametext(e) {

    const arrData = inpot1.value

    let text1;
    if (localStorage.getItem("text1") === null) {

        text1 = [];

    } else {
        text1 = JSON.parse(localStorage.getItem("text1"));

    }
    text1.push(arrData);



    localStorage.setItem(Math.floor(Math.random() * 10), JSON.stringify(text1));

    alert("SAVED");

    e.preventDefault();

}