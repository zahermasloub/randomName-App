//import HTML Item 
const UIform = document.querySelector(".card");
const inpot1 = document.getElementById("b1");
const inpot2 = document.querySelector(".inbt2");
const btn = document.querySelector(".sbmit");
const UIAddname = document.querySelector(".addName");
const lod = document.getElementById("loading");
const inpot3 = document.querySelector(".resalt");


//Event Handeler 

UIAddname.addEventListener("click", addNametext)

btn.addEventListener("click", function (e) {

    inpot3.style.display = "none";
    lod.style.display = "block";



    setTimeout(pikName, 1000);


    e.preventDefault();
});


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






function pikName() {


    const resolt1 = Math.floor(Math.random() * sory.length);

    const pickNm = sory[resolt1];

    inpot2.value = pickNm;

    inpot3.style.display = "block";

    lod.style.display = "none";





}