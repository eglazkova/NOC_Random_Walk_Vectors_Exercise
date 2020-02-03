//Here I try to analyze and play around the original code by //Johan Karlsson. See original code at //https://codepen.io/DonKarlssonSan/post/random-walk

//feels like this could easily be a class?
//anyways, here we create our random Vectors, and two arrays to coordinate the length of each tail. I made them longer than in the source code.

function Particle() {

  this.pos = createVector(random(windowWidth), random(windowHeight));
  this.tail = [];
  this.tailLength = 33;

}

//This is the most difficult part for me, still don't get it, what the whole function is about, even though separate methods seem to be clear.
Particle.prototype.move = function() {
  if (this.tail.length > this.tailLength) {
    this.tail.splice(0, 1);
  }
  this.tail.push(this.pos.copy());

  this.pos.x += random(-particleStepMax, particleStepMax);
  this.pos.y += random(-particleStepMax, particleStepMax);
}

//function to create 'creature' with tails, draws a line for each particle within the array this.tail 
Particle.prototype.draw = function() {
  this.tail.forEach(pos => {
    line(this.pos.x, this.pos.y, pos.x, pos.y);
  });
}


var particles;
var particleStepMax;

function setup() {
  particleStepMax = 7;
  initParticles();
  createCanvas(600, 400);
}

//.forEach method and the syntax of the function is new to me but it seems to be clear: draws and moves every single vector //(particle)
function draw() {
  background(255);
  particles.forEach(p => {
    p.move();
    p.draw();
  });
}

//creates a system of particles 
function initParticles() {
  particles = [];
  for (var i = 0; i < 70; i++) {
    particles.push(new Particle());
  }
}


function mouseClicked() {
  initParticles();
  background(255);
}