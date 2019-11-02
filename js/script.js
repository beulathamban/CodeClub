console.log('script working');

var red = 0;//count of red blocks
var green = 0;
var click = 0; // count of clicks
var square = [];//array to store index of blocks clicked
var points = 0;
$('.red').on('click', function(){
  $(this).css('background', 'red');
  red++;
  click++;
  var index = $('.red').index(this);
  console.log(index);
  square.push(index);
  console.log('array fo red is like ', square);
  if ((red < 2) && (click == 2)) {
    $(this).css('background', 'blue');
  } else if ((red == 2) && (click == 2)){
    points = 2;
    square = [];
      $(this).css('background', 'blue');
  }
  console.log('red points = ', red);
});



//green
$('.green').on('click', function(){
  $(this).css('background', 'green');
  green++;
  click++;
  var index = $('.green').index(this);
  console.log('index of green',index);
  square.push(index);
  console.log('array for green is like ', square);
  if ((green < 2) && (click == 2)) {
    $(this).css('background', 'yellow');
  } else if ((green == 2) && (click == 2)){
    points = points + 2;
    square = [];
      $(this).css('background', 'yellow');
  }
  console.log('green points=', green);
});
