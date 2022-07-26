'use strict';

let totalVotes = 25;
let allProducts = [];

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultBtn = document.getElementById('view-result-btn');
let viewResult = document.getElementById('view-result');

function product(name, photoExtension = 'jpg') {
  this.name = name;
  this.photo = `img/${name}.${photoExtension}`;
  this.views = 0;
  this.votes = 0;

  allProducts.push(this);
}

new product('sweep', 'png');
new product('bag');
new product('banana');
new product('bathroom');
new product('boots');
new product('breakfast');
new product('bubblegum');
new product('chair');
new product('cthulhu');
new product('dog-duck');
new product('dragon');
new product('pen');
new product('pet-sweep');
new product('scissors');
new product('shark');
new product('tauntaun');
new product('unicorn');
new product('water-can');
new product('wine-glass');


function randonIndexGenerator() {
  return Math.floor(Math.random() * allProducts.length);
}


function renderImg() {
  let imgOneIndex = randonIndexGenerator();
  let imgTwoIndex = randonIndexGenerator();
  let imgThreeIndex = randonIndexGenerator();

  while (imgOneIndex === imgTwoIndex) {
    imgTwoIndex = randonIndexGenerator;
  }
  while (imgOneIndex === imgThreeIndex) {
    imgOneIndex = randonIndexGenerator;
  }
  while (imgTwoIndex === imgThreeIndex) {
    imgThreeIndex = randonIndexGenerator;
  }

  imgOne.src = allProducts[imgOneIndex].photo;
  imgOne.alt = allProducts[imgOneIndex].name;
  allProducts[imgOneIndex].views++;

  imgTwo.src = allProducts[imgTwoIndex].photo;
  imgTwo.alt = allProducts[imgTwoIndex].photo;
  allProducts[imgTwoIndex].views++;

  imgThree.src = allProducts[imgThreeIndex].photo;
  imgThree.alt = allProducts[imgThreeIndex].photo;
  allProducts[imgThreeIndex].views++;
}

renderImg();


function handleClick(event) {
  let imgClicked = event.target.alt;

  for (let i = 0; i < allProducts.length; i++) {
    if (imgClicked === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }
  totalVotes--;

  renderImg();

  if (totalVotes === 0) {
    imgContainer.removeEventListener('click', handleClick);
  }
}

function handleResult() {
  if (totalVotes === 0) {
    for (let i = 0; i < allProducts.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${allProducts[i].name}: views: ${allProducts[i].views}, votes: ${allProducts[i].votes}`;
      resultList.appendchild(liElem);
    }
  }
}

imgContainer.addEventListener('click', handleClick);

resultBtn.addEventListener('click', handleResult);

