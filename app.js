'use strict'

var leftImage = document.getElementById('left');
var rightImage = document.getElementById('right');
var middleImage = document.getElementById('middle');
var containerEl = document.getElementById('image_container');


// leftImage.src = 'images/bag.jpg';
// leftImage.name = 'bag.jpg';
// leftImage.title = 'bag.jpg';

// middleImage.src = 'images/banana.jpg';
// middleImage.name = 'banana.jpg';
// middleImage.title = 'banana.jpg';

// rightImage.src = 'images/boots.jpg';
// rightImage.name = 'boots.jpg';
// rightImage.title = 'boots.jpg';

var allProducts = [];
var totalClick = 0;

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

    var uniquePicArray = [];
    //assign value to index 0 and 1
    uniquePicArray[0] = makeRandom();
    uniquePicArray[1] = makeRandom();
    uniquePicArray[2] = makeRandom();

    while(uniquePicArray[0] === uniquePicArray[1] || uniquePicArray[2]=== uniquePicArray[1] || uniquePicArray[0] === uniquePicArray[2]) {
        console.error('Duplicate found, Re-rolling!');
        // uniquePicArray[1] = makeRandom();
        if(uniquePicArray[0] === uniquePicArray[1]){
            uniquePicArray[1] = makeRandom();
        }
         if(uniquePicArray[2]=== uniquePicArray[1]){
            uniquePicArray[2] = makeRandom();
        }
        if(uniquePicArray[0] === uniquePicArray[2]){
            uniquePicArray[2] = makeRandom();
        }

}
    //add views here

    // console.log('SALSA:', allProducts[uniquePicArray[0]]);
    
            
    //display a oroduct whose is the random number
    allProducts[uniquePicArray[0]].views++;
    leftImage.src = allProducts[uniquePicArray[0]].path;
    leftImage.name = allProducts[uniquePicArray[0]].name;
    leftImage.title = allProducts[uniquePicArray[0]].name;

            //add views here
    allProducts[uniquePicArray[1]].views++;
    rightImage.src = allProducts[uniquePicArray[1]].path;
    rightImage.name = allProducts[uniquePicArray[1]].name;
    rightImage.title = allProducts[uniquePicArray[1]].name;

    allProducts[uniquePicArray[2]].views++;
    middleImage.src = allProducts[uniquePicArray[2]].path;
    middleImage.name = allProducts[uniquePicArray[2]].name;
    middleImage.title = allProducts[uniquePicArray[2]].name;
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
new Product('water-can');
new Product('wine-glass');

function handleClick() {
    var chosenImage = event.target.title;
    console.log('chosenImage', chosenImage);
    if(totalClick === 25){
        alert('thank you');
        containerEl.removeEventListener('click', handleClick);
        //make chart  get in here.....for today 
        //only after 25 click will this list render
        for(var i = 0; i < allProducts.length; i++){ 
            var li1 = document.createElement('li');
            li1.textContent = allProducts[i].name + ' views: ' + allProducts[i].views + ' Votes: ' + allProducts[i].votes; 
            liste.appendChild(li1);
        }
    }

    for( var i = 0; i < allProducts.length; i++) {
        if(allProducts[i].name === chosenImage) {
            allProducts[i].votes++;
            allProducts[i].views++;
        }
    }
    totalClick++;
 console.log('totalClick', totalClick);
 renderProducts();
}

renderProducts();

containerEl.addEventListener('click', handleClick);

var liste = document.getElementById('tally');

// for(var i = 0; i < allProducts.length; i++){ 
//     var li1 = document.createElement('li');
//     li1.textContent = allProducts[i].name + ' views: ' + allProducts[i].views + ' Votes: ' + allProducts[i].votes; 
//     liste.appendChild(li1);
// }