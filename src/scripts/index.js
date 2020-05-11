
const btnMobieMenu = document.getElementById('btnMenuMobile');

const boxMenu = document.getElementsByClassName('box-menu')[0];

function viewBoxMenu(box) {
  box.style.visibility = 'visible';
}

function hiddenBoxMenu(box) {
  box.style.visibility = 'hidden';
}

btnMobieMenu.addEventListener('click', function() {
  if (boxMenu.style.visibility === 'hidden') {
    viewBoxMenu(boxMenu);
  }
  else {
    hiddenBoxMenu(boxMenu);
  }
});