// make each bubble a random colour

var nums = [100, 25, 46, 72];

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0);
  var x = 100;
  for (var i = 0; i < 4; i++) {
    ellipse(x, 200, nums[i], nums[i]);
    x += 100;
  }
}
