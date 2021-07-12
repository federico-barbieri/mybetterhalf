
const roulette = document.querySelector('.job-roulette');

const handywoman = document.querySelector('.handywoman');

const lightbulb = document.querySelector('.lightbulb');

const ramen = document.querySelector('.ramen');

const pizza = document.querySelector('.pizza');

const rollerblader = document.querySelector('.rollerblader');

const guide = document.querySelector('.guide');

const author = document.querySelector('.author');

const dentist = document.querySelector('.dentist');


roulette.addEventListener('change', () => {

let count = 0;

if (roulette.value == 1){
  count += 1;
  handywoman.style.visibility ="visible";
  handywoman.style.zIndex = count;
}
if (roulette.value == 2){
  count += 1;
  lightbulb.style.visibility = "visible";
  lightbulb.style.zIndex = count;
}
if (roulette.value == 3){
  count += 1;
  ramen.style.visibility = "visible";
  ramen.style.zIndex = count;
}
if (roulette.value == 4){
  count += 1;
  pizza.style.visibility = "visible";
  pizza.style.zIndex = count;
}
if (roulette.value == 5){
  count += 1;
  rollerblader.style.visibility = "visible";
  rollerblader.style.zIndex = count;
}
if (roulette.value == 6){
  count += 1;
  guide.style.visibility = "visible";
  guide.style.zIndex = count;
}
if (roulette.value == 7){
  count += 1;
  author.style.visibility = "visible";
  author.style.zIndex = count;
}
if (roulette.value == 8){
  count += 1;
  dentist.style.visibility = "visible";
  dentist.style.zIndex = count;
}
})
