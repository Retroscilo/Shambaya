var c1 = document.querySelector('.c1');
var c2 = document.querySelector('.c2');
var c3 = document.querySelector('.c3');
var c4 = document.querySelector('.c4');
var c = document.querySelectorAll('.c');

var counter = 0;
var counting = true;

var w = document.querySelectorAll('.w');

const reset = () => {
  for (let i = 0; i < 4; i++) {
    c[i].style.opacity = 0;
    w[i].classList.remove('active')
  }
}

const view = () => {
  reset()
  c[counter].style.opacity = 1;
  w[counter].classList.add('active')
}

const count = () => {

  setInterval(() => {
    if (counting) {
      if (counter < 3) {
        counter++
      } else {
        counter = 0;
      };
      view()
    }

  }, 5000);
}

count()



for (let i = 0; i < w.length; i++) {
  w[i].addEventListener('mouseover', (target) => {
    counting = false;
    reset()
    w[i].classList.add('active')
    c[i].style.opacity = 1;
    counter = i
  })
  w[i].addEventListener('mouseout', (target) => {
    counting = true;
  })
}