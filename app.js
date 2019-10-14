'use strict'

var leftImage = document.getElementById('left');
var rightImage = document.getElementById('right');
var containerEl = document.getElementById('image_container');

leftImage.src = 'images/bag.jpg';
leftImage.name = 'bag.jpg';
leftImage.title = 'bag.jpg';

rightImage.src = 'images/boots.jpg';
rightImage.name = 'boots.jpg';
rightImage.title = 'boots.jpg';

var allProducts = [];

function Product(name){
    this.name = name;
    this.path = `images/${name}.jpg`;
    this.views = 0;
    this.votes = 0;
    allProducts.push(this);
    //product.votes;
}

function makeRandom(){
    return Math.floor(Math.random() * allProducts.length);
}

function renderProducts(){
    //crest aray to hold unique indexes
    var uniquePicArray = [];
    //assign value to index 0 and 1
    uniquePicArray[0] = makeRandom();
    uniquePicArray[1] = makeRandom();

    while(uniquePicArray[0] === uniquePicArray[1]) {
        console.error('Duplicate found, Re-rolling!');
        uniquePicArray[1] = makeRandom();
    }
    //add views here
allProducts[uniquePicArray[0]].views++;
        
//display a oroduct whose is the random number
leftImage.scr = allProducts[uniquePicArray[0]].path;
leftImage.name = allProducts[uniquePicArray[0]].name;
leftImage.title = allProducts[uniquePicArray[0]].name;

        //add views here
allProducts[uniquePicArray[1]].views++;
rightImage.scr = allProducts[uniquePicArray[1]].path;
rightImage.name = allProducts[uniquePicArray[1]].name;
rightImage.title = allProducts[uniquePicArray[1]].name;
}


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
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('usb');
new Product('water-');
new Product('wine');

function handleClick() {
    var chosenImage = event.target.title;
    console.log('chosenImage', chosenImage);
    for( var i = 0; i < allProducts.length; i++) {
        if(allProducts[i].name === chosenImage) {
            allProducts[i].votes++;
        }
    }
renderProducts();
}
containerEl.addEventListener('click', handleClick);

renderProducts();
