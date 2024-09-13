const menuToggle = document.querySelector('.menu-toggle')
const menuList = document.querySelector('.menu__list-wrapper-burger')
const menuLogo = document.querySelector('.burger-logo')
const lkToggle = document.querySelector('.lk-toggle')
const lkList = document.querySelector('.lk-wrapper')

menuToggle.addEventListener('click', function () {
  if (menuList.style.display === 'none' || menuList.style.display === '') {
    menuList.style.display = 'flex'
    menuLogo.style.display = 'block'
    menuToggle.style.backgroundImage = "url(/images/cross.png)"
    menuToggle.style.width = '29.58px'
    menuToggle.style.height = '29.58px'
    menuToggle.style.right = '32.2px'
    menuToggle.style.top = '61.3px'
    lkToggle.style.display = 'none'
    lkList.style.display = 'none'
    lkToggle.style.backgroundImage = "url(/images/Group62.png)"
  } else {
    menuList.style.display = 'none'
    menuLogo.style.display = 'none'
    menuToggle.style.backgroundImage = "url(/images/burger.png)"
    menuToggle.style.width = '39.49px'
    menuToggle.style.height = '23.92px'
    menuToggle.style.right = '23.36px'
    menuToggle.style.top = '30px'
    lkToggle.style.display = 'block'
  }
})

lkToggle.addEventListener('click', function () {
  if (lkList.style.display === 'none' || lkList.style.display === '') {
    lkList.style.display = 'block'
    lkToggle.style.backgroundImage = "url(/images/Group62active.png)"

  } else {
    lkList.style.display = 'none'
    lkToggle.style.backgroundImage = "url(/images/Group62.png)"
  }
})

function moveBlock() {
  const textarea = document.querySelector('.writerules__textarea');
  const block = document.querySelector('.movable-block');
  const lines = textarea.value.split('\n').length;
  block.style.top = `${lines * 20}px`;
}

document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.querySelector('.createpost__textarea');

  function autoResize() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  autoResize();

  textarea.addEventListener('input', autoResize);
});

const btn1 = document.querySelector('.changingmail-password__btn1')
const btn2 = document.querySelector('.changingmail-password__btn2')

btn2.addEventListener('click', function () {
  let input = document.querySelector('.changingmail-password__inp2');
  if (input.getAttribute('type') === 'password') {
    input.setAttribute('type', 'text');
    btn2.style.backgroundImage = "url(/images/passwordbtn.png)"
  } else {
    input.setAttribute('type', 'password');
    btn2.style.backgroundImage = "url(/images/buttonvisibility.png)"
  }
});

btn1.addEventListener('click', function () {
  let input = document.querySelector('.changingmail-password__inp1');
  if (input.getAttribute('type') === 'password') {
    input.setAttribute('type', 'text');
    btn1.style.backgroundImage = "url(/images/passwordbtn.png)"
  } else {
    input.setAttribute('type', 'password');
    btn1.style.backgroundImage = "url(/images/buttonvisibility.png)"
  }
});

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

