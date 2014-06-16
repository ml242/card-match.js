$(document).ready(function(){
  console.log('ready to kick ass');
  $('#easy-game').hide();
  $('#submit').on('click', startGame)

  var choice1 = '';
  var choice2 = '';
  var tag1;
  var tag2;

  function checkWin(){
    debugger;
    if ($('.card').length == $('.winners').length){
      alert('YOU WIN');
    }
  };

  function checkCard(){

    setTimeout(function(){

      if (choice1 == choice2){
        $('.clicked').addClass('winners');
        $('.winners').removeClass('clicked');
        choice1 = '';
        choice2 = '';
      } else {
        $('.clicked').closest('.card').css('opacity', 0);
        $('clicked').removeClass();
        choice1 = '';
        choice2 = '';
      }
    }, 1000);
  
  };

  function showCard(){
    if (choice1 == '') {
      choice1 = this.src;
      $(this).addClass('clicked');
      $(this).closest('.card').css('opacity', 1);  
    } else {
      choice2 = this.src;
      $(this).addClass('clicked');
      $(this).closest('.card').css('opacity', 1);  
      checkCard();
    }
  };

$('.card').on('click', showCard);
$('.card').on('click', checkWin);

});



function startGame(){
  var game = $( "#start-game option:selected" ).text();
      // console.log(game);
      if(game == "Easy"){
        startEasy();
      } else if(game == "Intermediate") {
        startInt();
      } else if (game=="Difficult"){
        startHard();
      } else {
        startIns();
      }
      

    };


    function startEasy(){

      var easyGame = [
      'images/hj.png',
      'images/hq.png',
      'images/hk.png',
      'images/hj.png',
      'images/hq.png',
      'images/hk.png',
      'images/h1.png',
      'images/h1.png'
      ];

      easyGame = _.shuffle(easyGame) 

  // console.log('easy');
  $('#selector').hide();
  $('#easy-game').show();
  var eGame = $('.card');
  for(i=0; i < eGame.length; i++){
    // $(eGame[i]).css('background-image', 'url(' + easyGame[i] + ')');
    eGame[i].src = easyGame[i];
  }
  setTimeout(function() 
  {
    eGame.css('opacity', 0.0)
    //do something special
  }, 2500);

}

function startInt(){
  // console.log('int');
}

function startHard(){
  // console.log('hard');
}

function startIns(){
  // console.log('insane');
}


var intGame = [
'images1.png',
'images2.png',
'images3.png',
'images4.png',
'images5.png',
'images6.png'
];

var hardGame = [
'images1.png',
'images2.png',
'images3.png',
'images4.png',
'images5.png',
'images6.png',
'images7.png',
'images8.png',
'images9.png',
'images10.png',
'images11.png',
'images12.png'
];

// function shuffle(array) {
//   var currentIndex = array.length, 
//   temporaryValue, 
//   randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

