const roulette = document.querySelector('.job-roulette');

const rollerblader = document.querySelector('.rollerblader');


roulette.addEventListener('change', () => {

  if (roulette.value == 5){
    rollerblader.style.visibility = "visible";
  }
})
