console.log('banking');
var selectedFrom="";
var selectedTo="";
var accounts = [
  {
    name : "online",
    limit: 2000,
    balance: 5400,
    available: 5400
  },
  {
    name : "go",
    limit : 1000,
    balance: 400,
    available: 400
  },
  {
    name : "credit",
    limit : 5000,
    balance: 4700,
    available: -300
  },
  {
    name : "kiwi",
    limit : 0,
    balance: 6855,
    available: 0
  },
  {
    name : "serious",
    limit : 5000,
    balance: 12780,
    available: 12780
  }

]

$('#accounts').hide();
$('#transfers').hide();
$('#payments').hide();
$('#deposits').hide();
$('#withdraws').hide();
$('#amount').hide();


$(document).ready(function(){
  $('#openNav').click(function(){

    $('.overlay').css('display','block').css('width','60%');
  });
  $('#acc').click(function(){
    $('#accounts').show();
    $('#transfers').hide();
    $('#pin').hide();
    $('.overlay').hide();

  });
  $('#trans').click(function(){
    $('#transfers').show();
    $('#amount').show();
    $('#accounts').hide();
    $('#pin').hide();
    $('.overlay').hide();
  });
  $('#pay').click(function(){
    $('#payments').show();
  });
  $('#dep').click(function(){
    $('#deposits').show();
  });
  $('#with').click(function(){
    $('#withdraws').show();
  });
  $('.transferButtonsFrom').on('click', function(){
    $('.transferButtonsFrom').removeClass('highlight');
    $(this).addClass('highlight');

  });
  $('.transferButtonsTo').on('click', function(){
    $('.transferButtonsTo').removeClass('highlight');
    $(this).addClass('highlight');

  });
  // $('.online').hover(function(){
  //    $('.onlinelbl').show();
  //   $(this).addClass('label');
  //
  // });
  $('#onlineFrom').click(function(){
    selectedFrom="online";
  });
  $('#goFrom').click(function(){
    selectedFrom="go";
  });
  $('#seriousFrom').click(function(){
    selectedFrom="serious";
  });
  $('#creditFrom').click(function(){
    selectedFrom="credit";
  });
  $('#onlineTo').click(function(){
    selectedTo="online";
  });
  $('#goTo').click(function(){
    selectedTo="go";
  });
  $('#seriousTo').click(function(){
    selectedTo="serious";
  });
  $('#creditTo').click(function(){
    selectedTo="credit";
  });

  $('#transferAmt').click(function(){
    $(this).val("");
  });


var flag=true;

  $('#transfer').click(function(){
    console.log(selectedFrom , selectedTo);
    var transferAmount = document.getElementById('transferAmt').value;
    console.log(transferAmount);
    if (selectedFrom === selectedTo) {
      alert("Please choose different accounts from the two lists");
    } else if ((selectedFrom !== "") && (selectedTo !== "")){
     if (selectedFrom === "online") {
       accounts[0].balance= accounts[0].balance - parseInt(transferAmount);
      accounts[0].available  = accounts[0].balance;
       console.log(accounts[0].balance, accounts[0].available);
       document.getElementsByClassName('mybtn')[0].innerHTML ='Online : $ ' + accounts[0].available;
     } else if (selectedFrom === "go") {
        accounts[1].balance= accounts[1].balance - parseInt(transferAmount);
       accounts[1].available  = accounts[1].balance;
        console.log(accounts[1].balance, accounts[1].available);
        document.getElementsByClassName('mybtn')[1].innerHTML ='Go : $ ' + accounts[1].available;
      } else if (selectedFrom === "credit") {
        if (parseInt(transferAmount) <= accounts[2].balance) {
         accounts[2].balance= accounts[2].balance - parseInt(transferAmount);
        accounts[2].available  = accounts[2].available-transferAmount;
         console.log(accounts[2].balance,-( accounts[2].available));
         document.getElementsByClassName('mybtn')[2].innerHTML ='Credit card limit : $ 5000 <br> Available : $ -' + accounts[2].available;
         flag = true;
       } else if (parseInt(transferAmount) > accounts[2].balance){
         alert('exceeded limit. try lesser amount');
         flag=false;
         console.log(flag, typeof(flag));
       }
     } else if (selectedFrom === "serious") {
          accounts[4].balance= accounts[4].balance - parseInt(transferAmount);
         accounts[4].available  = accounts[4].balance;
          console.log(accounts[4].balance, accounts[4].available);
          document.getElementsByClassName('mybtn')[4].innerHTML ='Serious saver : $ ' + accounts[4].available;
        }

    if ((selectedTo === "online") && (flag === true)) {
       accounts[0].balance= accounts[0].balance + parseInt(transferAmount);
      accounts[0].available  = accounts[0].balance;
       console.log(accounts[0].balance, accounts[0].available);
       document.getElementsByClassName('mybtn')[0].innerHTML ='Online : $ ' + accounts[0].available;
     } else if (selectedTo === "go") {
       accounts[1].balance= accounts[1].balance + parseInt(transferAmount);
      accounts[1].available  = accounts[1].balance;
       console.log(accounts[1].balance, accounts[1].available);
       document.getElementsByClassName('mybtn')[1].innerHTML ='Go : $ ' + accounts[1].available;
        } else if (selectedTo === "credit") {
         accounts[2].balance= accounts[2].balance + parseInt(transferAmount);
         if (accounts[2].balance < accounts[2].limit) {
           accounts[2].available  = accounts[2].balance - accounts[2].limit;
          }
         console.log(accounts[2].balance, accounts[2].available);
         document.getElementsByClassName('mybtn')[2].innerHTML ='Credit card limit : $ 5000 <br> Available : $ ' + accounts[2].available;
        } else if (selectedTo === "serious") {
         accounts[4].balance= accounts[4].balance + parseInt(transferAmount);
         accounts[4].available  = accounts[4].balance;
         console.log(accounts[4].balance, accounts[4].available);
         document.getElementsByClassName('mybtn')[4].innerHTML ='Serious saver : $ ' + accounts[4].available;
        }

      } else {
        alert('Please select one account from each of the two lists below');
      }
  }); //transfer button clicked


}); //document ready

// var accounts= [
//   {
//
//     custNumber : "MBA1005678",
//     custName  : "David Kwatsky",
//     accountType : "Online",
//     accountBalance: 5400,
//     Withdrawal : 0,
//     deposit : 0,
//
//
//   },
//
//
// ];
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


document.getElementById('openNav').addEventListener('click', function(){
  openNav();

});

document.getElementById('closeNav').addEventListener('click', function(){
  closeNav();

});
