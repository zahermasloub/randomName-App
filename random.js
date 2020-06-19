//import HTML Item 
const UIform = document.querySelector(".card");
const inpot1 = document.getElementById("b1");
const inpot2 = document.querySelector(".inbt2");
const btn = document.querySelector(".sbmit");
const UIAddname = document.querySelector(".addName");


//Event Handeler 

UIAddname.addEventListener("click", addNametext)

btn.addEventListener("click", pikName);


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



    localStorage.setItem('text1', JSON.stringify(text1));

    // alert("SAVED");

    inpot1.value = "";

    e.preventDefault();

}

const sory = JSON.parse(localStorage.getItem("text1"));

console.log(sory);

// // const inpot2 = document.querySelector(".inbt2");
function pikName(e) {

    const pickNm = sory[Math.floor(Math.random() * sory.length)];

    inpot2.value = pickNm;

    e.preventDefault()



}