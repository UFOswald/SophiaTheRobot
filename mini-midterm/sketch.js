let backgroundImage;
//let gifImage;
let sound;
let loopStart = 0.0;
let loopDuration = 120.0;
let doctorGlitch;
let t = 'Sophia the Robot';
//let video;
let nickBostrom;

function preload() {
  nickBostrom = loadImage("NickBostrom.png");
  //gifImage = createImg("https://images.app.goo.gl/uBWQiLGrnLogbAbb8");
  soundFormats('mp3', 'ogg');
  sound = loadSound('NIN.mp3');
  doctorGlitch = loadFont("Doctor Glitch.otf");
  
}

function setup() {
  backgroundImage = loadImage("Sophia the Robot.png");
  let cnv = createCanvas(windowWidth, windowHeight);
  
  cnv.mousePressed(canvasPressed);
  //text('tap here to play', 10, 20);
}

function canvasPressed() {
  sound.loop();
  //background(backgroundImage);
  
}

function mouseReleased() {
  sound.stop();
  //background(backgroundImage);
  //text('tap here to play', 10, 20);
}

function draw(){
  
  background(backgroundImage);
  
  //image(gifImage, 50, 50);
  if (mouseIsPressed === true) {
    image(nickBostrom, mouseX, mouseY, 100, 100);
    line(mouseX, mouseY, 150, 150);
  }
  
  fill(50);
  stroke(255);
  strokeWeight(2);
  textFont(doctorGlitch);
  textSize(30);
  text(t, 90, windowHeight-20);
}

// function keyPressed() {
  // if (keyCode === LEFT_ARROW) {  
// }
  // else if (keyCode === RIGHT_ARROW) {
 // }
// }
