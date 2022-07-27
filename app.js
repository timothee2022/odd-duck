'use strict';



let totalVotes = 25;
let allProducts = [];

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultBtn = document.getElementById('show-result-button');
let resultsList = document.getElementById('results-list');

console.dir(resultsList);

function Product(name, photoExtension = 'jpg') {
  this.name = name;
  this.photo = `img/${name}.${photoExtension}`;
  this.views = 0;
  this.votes = 0;

  allProducts.push(this);
}

new Product('sweep', 'png');
new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');


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

  console.log('imgClicked:', imgClicked);

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
    console.log('totalVote is:', totalVotes);

    for (let i = 0; i < allProducts.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${allProducts[i].name}: views: ${allProducts[i].views}, votes: ${allProducts[i].votes}`;
      console.log('liElem is:', liElem);

      resultsList.appendChild(liElem);

    }
    resultBtn.removeEventListener('click', handleResult);
  }
  console.log('resultsList:', resultsList);
}

imgContainer.addEventListener('click', handleClick);

resultBtn.addEventListener('click', handleResult);

