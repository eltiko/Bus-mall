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

loadData();


function handleClick() {
    var chosenImage = event.target.title;
    console.log('chosenImage', chosenImage);
    if(totalClick === 25){
        alert('thank you');
        containerEl.remove(handleClick);
    
        makeChart();
        storageData();
        loadData()
    
    }
        function storageData(){
            var allProductsStringified = JSON.stringify(allProducts);
            localStorage.setItem('data', allProductsStringified);
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



Product.bottomNameBar = [];
Product.bottomVotesBar = [];

var createDataBar = function(){ 
    for(var i = 0; i < allProducts.length; i++) {
        Product.bottomNameBar.push(allProducts[i].name);
        Product.bottomVotesBar.push(allProducts[i].votes);
    }
};

function loadData(){
   
    var storageAllProducts = localStorage.getItem('data');
    var parsedAllProducts = JSON.parse(storageAllProducts);
    for( var i = 0; i < parsedAllProducts.length; i++){
        var newProduct = new Product(parsedAllProducts[i].name, parsedAllProducts[i].views, parsedAllProducts[i].votes);
        newProduct.views = parsedAllProducts[i].views;
        newProduct.votes = parsedAllProducts[i].votes;
    }
}

var makeChart = function(){
    createDataBar();

var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Product.bottomNameBar,
                    datasets: [{
                        label: '# of Votes',
                        data: Product.bottomVotesBar,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
};