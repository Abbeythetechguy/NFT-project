
// This for the first overlay
let priceBtnOne = document.getElementById ( "priceBtnOne");
priceBtnOne.addEventListener ("click", showForm);

function showForm () {
    let overlayElem = document.getElementById ("overlayOne");
    overlayElem.style.display = "block";
}

//This is to close to overlay
let closeIcon = document.getElementById("fa-close");
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
//This is to close to second overlay
function closeform2() {
    let overlayElem2 = document.getElementById ("overlayTwo");
    overlayElem2.style.display = "none";
}

// this function is for collection
let displayBtn = document.getElementById ( "displayBtn");
displayBtn.addEventListener ("click", showHidden);

function showHidden() {
    let sliderElem = document.getElementById ("slider");
    sliderElem.style.overflow = "auto";
    sliderElem.style.justifyContent = "space-evenly";
    sliderElem.style.margin = "16rem 100rem";
    sliderElem.style.flexWrap = "wrap";
}
