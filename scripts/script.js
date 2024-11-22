// JavaScript Document
console.log("hi");



/***************************/
/* STREEPJES BUTTON */
/***************************/
const StreepjesButton = document.querySelector(".streepjes li:nth-of-type(1) button");
StreepjesButton.onclick = StreepjesButtonKlik;

const deNav = document.querySelector("nav");

function StreepjesButtonKlik() {
  // Activeer aria-expanded attribuut
  if (StreepjesButton.ariaExpanded === "false") {
    StreepjesButton.ariaExpanded = "true";
  } else {
    StreepjesButton.ariaExpanded = "false";
  }

  // Activeer toonMenu class
  deNav.classList.toggle("toonMenu");
}
