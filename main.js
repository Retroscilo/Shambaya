var c1 = document.querySelector('.r1');
var c2 = document.querySelector('.r2');
var c3 = document.querySelector('.r3');
var c4 = document.querySelector('.r4');
var c = document.querySelectorAll('.room');

var counter = 0;
var counting = true;

const reset = () => {
  for (let i = 0; i < 4; i++) {
    hovers[i].classList.remove('hovered');
    CTAs[i].classList.remove('CTA--active');
    tests[i].classList.remove('p--active');
  }
}

const view = () => {
  reset()
  hovers[counter].classList.add('hovered');
  CTAs[counter].classList.add('CTA--active');
  tests[counter].classList.add('p--active');
}

const count = () => {

  console.log(counter)
  setInterval(() => {
    if (counting == true) {
      if (counter < 3) {
        counter++
        console.log(counter)
      } else {
        counter = 0;
      };
      view()
    }

  }, 5000);
}




/* 
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
} */

var minis = document.querySelectorAll('.room')
var hovers = document.querySelectorAll('.hover')
var CTAs = document.querySelectorAll('.CTA')
var tests = document.querySelectorAll('.position');

if (window.screen.width < 801) {
  CTAs[0].classList.add('CTA--active');
  hovers[0].classList.add('hovered')
  tests[0].classList.add('p--active')

  count()
}

for (let i = 0; i < minis.length; i++) {
  minis[i].addEventListener('mouseover', () => {
    hovers[i].classList.add('hovered');
    CTAs[i].classList.add('CTA--active');
    tests[i].classList.add('p--active');
  });

  minis[i].addEventListener('mouseout', () => {
    reset()
    hovers[i].classList.remove('hovered');
    CTAs[i].classList.remove('CTA--active');
    tests[i].classList.remove('p--active');
  })

  if (window.screen.width < 801) {

    minis[i].addEventListener('click', () => {
      reset()
      hovers[i].classList.add('hovered');
      CTAs[i].classList.add('CTA--active');
      tests[i].classList.add('p--active');
      counter = i
      counting = false;

      setTimeout(() => {
        counting = true
      }, 10000);
    })
  }



}