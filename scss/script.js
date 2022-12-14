var displayMobileMenu = document.getElementById('mobilenav');
var hamButton = document.getElementById('hambutton');

hamButton.addEventListener('click', () => {
    displayMobileMenu.classList.toggle('display');
    hamButton.children[0].classList.toggle('toggle1')
    hamButton.children[1].classList.toggle('toggle2')
    hamButton.children[2].classList.toggle('toggle3')
  })


  function changeBg() {
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if (scrollValue < 150) {
      navbar.classList.remove('nav__bgclr');
    } else {
      navbar.classList.add('nav__bgclr');
    }
  }
  
  window.addEventListener('scroll', changeBg);