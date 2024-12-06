// JavaScript Document
console.log("hi");



/***************************/
/* STREEPJES BUTTON */
/***************************/
const StreepjesButton = document.querySelector("li:nth-of-type(1) button");
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



/***************************/
/* Foto carousel*/
/***************************/
 /* Credits naar Sanne */

const PrevButton = document.querySelector("section:nth-of-type(1) button:nth-of-type(1)");
const NextButton = document.querySelector("section:nth-of-type(1) button:nth-of-type(2)");
const Carousel = document.querySelector("section:nth-of-type(1) ul");

PrevButton.onclick = PrevButtonKlik;
NextButton.onclick = NextButtonKlik;

function NextButtonKlik() {

  Carousel.scrollLeft = Carousel.scrollLeft + Carousel.offsetWidth;

}


function PrevButtonKlik() {

    Carousel.scrollLeft = Carousel.scrollLeft - Carousel.offsetWidth;
  
    if (Carousel.scrollLeft < 0) {
      Carousel.scrollLeft = items.length * scrollAmount; // Jump to the end
    }
  }

 