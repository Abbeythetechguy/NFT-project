// This is for the search icon on the nav bar

//grabbing the search bar
let searchIcon = document.getElementById("fa-magnifying-glass");
searchIcon.addEventListener("click", showSearchBar);

function showSearchBar() {
  let displayNavElem = document.getElementById("overlay");
  displayNavElem.style.display = "block";
}

// for displaying and hiding the search bar
let closeButton = document.getElementById("close-btn");
closeButton.addEventListener("click", closeSearchBar);

function closeSearchBar() {
  let hideSearchbar = document.getElementById("overlay");
  hideSearchbar.style.display = "none";
}

// to grab Marketplace for dropdown

function showMarketPlaceMenu() {
  let showMarketdropdownElem = document.getElementById(
    "marketplace-dropdown-content"
  );
  showMarketdropdownElem.classList.toggle("showmarket-dropdown");
}

// for  showing mobile side nav
function showSideNav() {
  let showMobNav = document.getElementById("mobile-menu");
  showMobNav.style.display = "block";
}
// for  closing mobile side nav
function closeSideNavBar() {
  let hideSearchbar = document.getElementById("mobile-menu");
  hideSearchbar.style.display = "none";
}

// Mobile menu marketplace drop down
function showMobileMarketDropdown() {
  let showMobileMarketElem = document.getElementById(
    "mobile-marketplace-dropdown-content2"
  );
  showMobileMarketElem.classList.toggle("showMobmarket-dropdown");
}


// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

    // function showSlides(n) {
    //   let i;
    //   let slides = document.getElementsByClassName("trending-nft-flex-items");
    // //   let dots = document.getElementsByClassName("dot");
    //   if (n > slides.length) {slideIndex = 1}
    //   if (n < 1) {slideIndex = slides.length}
    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    //   }
    // //   for (i = 0; i < dots.length; i++) {
    // //     dots[i].className = dots[i].className.replace(" active", "");
    // //   }
    //   slides[slideIndex-1].style.display = "block";
    // //   dots[slideIndex-1].className += " active";
    // }
