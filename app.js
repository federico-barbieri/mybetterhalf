
const roulette = document.querySelector('.job-roulette');

const handywoman = document.querySelector('.handywoman');

const lightbulb = document.querySelector('.lightbulb');

const ramen = document.querySelector('.ramen');

const pizza = document.querySelector('.pizza');

const rollerblader = document.querySelector('.rollerblader');

const guide = document.querySelector('.guide');

const author = document.querySelector('.author');



roulette.addEventListener('change', () => {

let count = 0;

if (roulette.value == 1){
  count += 1;
  handywoman.style.display ="flex";
  handywoman.style.zIndex = count;
  lightbulb.style.display = "none";
  ramen.style.display = "none";
  pizza.style.display = "none";
  rollerblader.style.display = "none";
  guide.style.display = "none";
  author.style.display = "none";
}
if (roulette.value == 2){
  count += 1;
  lightbulb.style.display = "flex";
  lightbulb.style.zIndex = count;
  handywoman.style.display = "none";
  ramen.style.display = "none";
  pizza.style.display = "none";
  rollerblader.style.display = "none";
  guide.style.display = "none";
  author.style.display = "none";
}
if (roulette.value == 3){
  count += 1;
  ramen.style.display = "flex";
  ramen.style.zIndex = count;
  lightbulb.style.display = "none";
  handywoman.style.display = "none";
  pizza.style.display = "none";
  rollerblader.style.display = "none";
  guide.style.display = "none";
  author.style.display = "none";
}
if (roulette.value == 4){
  count += 1;
  pizza.style.display = "flex";
  pizza.style.zIndex = count;
  lightbulb.style.display = "none";
  ramen.style.display = "none";
  handywoman.style.display = "none";
  rollerblader.style.display = "none";
  guide.style.display = "none";
  author.style.display = "none";
}
if (roulette.value == 5){
  count += 1;
  rollerblader.style.display = "flex";
  rollerblader.style.zIndex = count;
  lightbulb.style.display = "none";
  ramen.style.display = "none";
  pizza.style.display = "none";
  handywoman.style.display = "none";
  guide.style.display = "none";
  author.style.display = "none";
}
if (roulette.value == 6){
  count += 1;
  guide.style.display = "flex";
  guide.style.zIndex = count;
  lightbulb.style.display = "none";
  ramen.style.display = "none";
  pizza.style.display = "none";
  rollerblader.style.display = "none";
  handywoman.style.display = "none";
  author.style.display = "none";
}
if (roulette.value == 7){
  count += 1;
  author.style.display = "flex";
  author.style.zIndex = count;
  lightbulb.style.display = "none";
  ramen.style.display = "none";
  pizza.style.display = "none";
  rollerblader.style.display = "none";
  guide.style.display = "none";
  handywoman.style.display = "none";
}

})
