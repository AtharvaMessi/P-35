//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;
var engine,Engine;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
 dog = createSprite(200,200,10,10);
 dog.addImage(dogImg);
  var readStockref = database.ref("Food");
  readStockref.on("value",readStock());
}


  



function draw() { 
  
  background(46,139,87);
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogHappy);
    }

  drawSprites();
    textSize(20);
    fill("green");
    stroke("blue");
    text("foodremaining"+foodS,100,200);

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  database.ref("/").update({
    food:x
})
}

