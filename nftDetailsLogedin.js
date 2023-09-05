
let priceBtnOne = document.getElementById ( "priceBtnOne");
priceBtnOne.addEventListener ("click", showForm);

function showForm () {
    let overlayElem = document.getElementById ("overlayOne");
    overlayElem.style.display = "block";
}

// let priceBtnTwo = document.getElementById ( "priceBtnTwo");
// priceBtnTwo.addEventListener ("click", showForm);

// function showForm () {
//     let overlay = document.getElementById ("overlayTwo");
//     overlay.style.display = "block";
// }




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