console.log('script working');

var red = 0;//count of red blocks
var green = 0;
var yellow = 0;

var click = 0; // count of clicks

var totalPoints = 0;



//red

$('.red').on('click', function(){

  $(this).css('background', 'red');
  red++;
  click++;
  console.log('red points = ', red);
  console.log(' clicks' ,click);

  if  ((click == 1) && (red == 1) ) {
      $('.red').css('background', '#724073');
      $('.green').css('background', '#724073');
        $('.yellow').css('background', '#724073');
      $(this).css('background', 'red');
       click = 1;
        red = 1;
    }

    if ((click == 2) && (red == 1)){
      $('.red').css('background', '#724073');
      $('.green').css('background', '#724073');
        $('.yellow').css('background', '#724073');
      $(this).css('background', 'red');

      click =0;
      red = 0;
    }


  if ((red == 2) && (click == 2)){
    totalPoints = totalPoints + 2;
    document.getElementById('points').innerHTML =  ' Red Points 2';
    document.getElementById('totalPoints').innerHTML = 'Total Points ' + totalPoints;
    // square = [];
    red = 0;
    console.log('click', click);
    click = 0;
  }

});

//---------------------------------------------
//green

$('.green').on('click', function(){

  $(this).css('background', 'green');
  green++;
  click++;
  console.log('green points = ', green);
  console.log(' clicks' ,click);

  if  ((click == 1) && (green == 1) ) {
      $('.red').css('background', '#724073');
      $('.green').css('background', '#724073');
        $('.yellow').css('background', '#724073');
      $(this).css('background', 'green');
       click = 1;
        green = 1;
    }
    if ((click == 2) && (green == 1)){
      $('.red').css('background', '#724073');
      $('.green').css('background', '#724073');
        $('.yellow').css('background', '#724073');
      $(this).css('background', 'green');
      click =0;
      green = 0;
    }

  if ((green == 2) && (click == 2)){
    totalPoints = totalPoints + 2;
    document.getElementById('points').innerHTML =  ' Green Points 2';
    document.getElementById('totalPoints').innerHTML = 'Total Points ' + totalPoints;
    // square = [];
    green = 0;
    console.log('click', click);
    click = 0;
  }

});








//yellow

$('.yellow').on('click', function(){

  $(this).css('background', 'yellow');
  yellow++;
  click++;
  console.log('yellow points = ', yellow);
  console.log(' clicks' ,click);

  if  ((click == 1) && (yellow == 1) ) {
      $('.red').css('background', '#724073');
      $('.green').css('background', '#724073');
        $('.yellow').css('background', '#724073');
      $(this).css('background', 'yellow');
       click = 1;
        yellow = 1;
    }

    if ((click == 2) && (yellow == 1)){
      $('.red').css('background', '#724073');
      $('.green').css('background', '#724073');
        $('.yellow').css('background', '#724073');
      $(this).css('background', 'yellow');

      click =0;
      yellow= 0;
    }


  if ((yellow == 2) && (click == 2)){
    totalPoints = totalPoints + 2;
    document.getElementById('points').innerHTML =  ' Yellow Points 2';
    document.getElementById('totalPoints').innerHTML = 'Total Points ' + totalPoints;
    // square = [];
    yellow = 0;
    console.log('click', click);
    click = 0;
  }

});
