// make each bubble a random colour

var nums = [100, 25, 46, 72];

var col = {
  r: 0,
  g: 0,
  b: 0
}


function setup() {
 
}

function draw() {
  background(0);
  createBubbles()
}

function createBubbles(){
  var x = 100;
  for (var i = 0; i < 4; i++) {
    col.r = random(0,255);
    col.g = random(0,255);
    col.b = random(0,255);
    fill(col.r, col.g, col.b)
    ellipse(x, 200, nums[i], nums[i]);
    x += 100;
  }
}