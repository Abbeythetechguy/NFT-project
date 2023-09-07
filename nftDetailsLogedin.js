
let priceBtnOne = document.getElementById ( "priceBtnOne");
priceBtnOne.addEventListener ("click", showForm);

// This for the first overlay
function showForm () {
    let overlayElem = document.getElementById ("overlayOne");
    overlayElem.style.display = "block";
}

let closeIcon = document.getElementById("fa-close");

//This is to close te overlay
function closeform() {
    let overlayElem = document.getElementById ("overlayOne");
    overlayElem.style.display = "none";
}

// This for the second overlay

let priceBtnTwo = document.getElementById ( "priceBtnTwo");
priceBtnTwo.addEventListener ("click", showForm2);

function showForm2 () {
    let overlayElem2 = document.getElementById ("overlayTwo");
    overlayElem2.style.display = "block";
}
function closeform2() {
    let overlayElem2 = document.getElementById ("overlayTwo");
    overlayElem2.style.display = "none";
}




// let a = document.getElementById(toggle);
// function toggle() {
//     if(a==1) {
//         document.getElementById(slider).style.display="inline";
//         return a=0;
//     }
//     else 
//     {
//         document.getElementById(slider).style.display="none";
//         return a=1;
//     }
// }