 /* Pop-up webshop 
  https://www.youtube.com/watch?v=TAB_v6yBXIE*/

  const modal = document.querySelector('dialog');
  const OpenDialog = document.querySelector('section:nth-of-type(2) li:nth-of-type(2) button');
  const CloseDialog = document.querySelector('dialog img:nth-of-type(2)');


OpenDialog.addEventListener('click', () => {
  console.log("click");
  modal.showModal();
})

CloseDialog.addEventListener('click', () => {

  modal.close();
})