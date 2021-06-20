let img;
var music;
let timer = 1;
//let a
//let c


function preload() {
  img = loadImage("LOL.png");
  music = loadSound("music.mp3");

}

function setup() {
  createCanvas(700, 700);
  background(0);
  image(img, 0, 0, 700, 700);
  frameRate(250);
  music.loop();
  //a = img.get(30,230); //rivercolor
  //c = img.get(350,350); //pathcolor
   q = random(2)
  

}

function draw() {

  fill(255);
  strokeWeight(20);
  stroke(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(`${getMinute(timer)}:${getSecond(timer)}`, 45, 35);
  if (frameCount % 1 == 0 && timer < 1800) {
    timer = timer + 4 ;
  }

  
  r = random(200, 255);
  g = 0;
  b = 0;
  x = random(30, 680);
  y = random(30, 680);
  s = random(1, 30);
  p = random(5, 80);
  fill(r, 0, 0, 230);
  stroke(0, 255, 11, 33);
  strokeWeight(p);
  if (timer <= 1799)
   {
	 
    circle(x, y, s, 500);
  } else circle(0);

  if ( q >= 1 && timer >= 1800)
   {
    fill(255,0,0);
    strokeWeight(7);
    stroke(0);
    textSize(100);
    text(`Victory!`, 350, 350);
    textSize(33)
    text(`Press any key to reset the match`,350,650)
  }
  else if (timer >= 1800)
  {fill(0,0,255 );
    strokeWeight(7);
    stroke(0);
    textSize(100);
    text(`Victory!`, 350, 350);
    textSize(33)
    text(`Press any key to reset the match`,350,650)}
}
function keyPressed() {
    if (keyCode === 32);
    image(img, 0, 0, 700, 700);
    timer = 1;
    q = random(2)
  }

function getMinute(sec) {
  return parseInt(sec / 60)
    .toString()
    .padStart(2, "0");
}

function getSecond(sec) {
  return (sec % 60).toString().padStart(2, "0");
}
