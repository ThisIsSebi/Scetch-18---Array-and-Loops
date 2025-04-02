// make each bubble a random colour

var nums = [100, 25, 46, 72];

var randomColor;

function setup() {

   //tiny canvas
   createCanvas(500, 500);
  
   //white background
   background(0);
  var x = 100;
  for (var i = 0; i < 4; i++) {
    randomColor = color(random(255), random(255), random(255))
    fill(randomColor)

    ellipse(x, 200, nums[i], nums[i]);
    x += 100;
  }
}