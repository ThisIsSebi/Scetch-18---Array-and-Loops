// make each bubble a random colour

function setup() {
  var num1 = random(200);
  var num2 = random(200);
  var num3 = random(200);
  var num4 = random(200);
  var nums = [num1, num2, num3, num4];
  let button;

  var randomColor;
  //tiny canvas
  createCanvas(500, 500);

  button = createButton('Click');

  //white background
  background(0);
  var x = 100;
  for (var i = 0; i < nums.length; i++) {

    randomColor = button.mousePressed(changeColour)
    fill(randomColor);

    ellipse(x, 200, nums[i], nums[i]);
    x += 100;
  }

  //button.position((windowWidth - button.width) / 8);
  button.position(210,520)

  button.size(50,30)
}

function changeColour(){
  color(random(255), random(255), random(255));
}
