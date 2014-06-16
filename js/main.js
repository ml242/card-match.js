$(document).ready(function(){
  console.log('ready to kick ass');
  $('#scoreboard').hide();
  $('#easy-game').hide();
  $('#int-game').hide();
  $('#hard-game').hide();
  $('#submit').on('click', startGame);

  var choice1 = '';
  var choice2 = '';
  var tag1;
  var tag2;

  function checkWin(){
    if ( $('.cardback').length <= $('.winners').length + 2) {
      alert('YOU WIN');
      $(".card").addClass('winners');
      $('.winners').removeClass('clicked');
    }
  };

  function checkCard(){

    setTimeout(function(){

      if (choice1 == choice2){
        $('.clicked').addClass('winners');
        $('.winners').removeClass('clicked');
        choice1 = '';
        choice2 = '';
        points = parseInt($('#points').text());
        points += 10;
        $('#points').text(points);
      } else {
        $('.clicked').closest('.card').css('opacity', 0);
        $('clicked').removeClass();
        choice1 = '';
        choice2 = '';
        points = parseInt($('#points').text());
        points -= 5;
        $('#points').text(points);
      }
    }, 500);
    checkWin();
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
      showScore();

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
    eGame[i].src = easyGame[i];
  }
    setTimeout(function() {
    eGame.css('opacity', 0.0)
  }, 2500);

}

function startInt(){
  $('#selector').hide();
  
  var intGame = [
    'images/hj.png',
    'images/hq.png',
    'images/hk.png',
    'images/hj.png',
    'images/hq.png',
    'images/hk.png',
    'images/h1.png',
    'images/h1.png',
    'images/sj.png',
    'images/sq.png',
    'images/sk.png',
    'images/sj.png',
    'images/sq.png',
    'images/sk.png',
    'images/s1.png',
    'images/s1.png'
  ];

  intGame = _.shuffle(intGame) 

  $('#int-game').show();

  var eGame = $('.intcard');
  for(i=0; i < eGame.length; i++){
    // $(eGame[i]).css('background-image', 'url(' + easyGame[i] + ')');
    eGame[i].src = intGame[i];
  }
  setTimeout(function() 
  {
    eGame.css('opacity', 0.0)
    //do something special
  }, 2500);
}

function startHard(){
  $('#selector').hide();
  
  var hardGame = [
    'images/hj.png',
    'images/hq.png',
    'images/hk.png',
    'images/hj.png',
    'images/hq.png',
    'images/hk.png',
    'images/h1.png',
    'images/h1.png',
    'images/sj.png',
    'images/sq.png',
    'images/sk.png',
    'images/sj.png',
    'images/sq.png',
    'images/sk.png',
    'images/s1.png',
    'images/s1.png',
    'images/dj.png',
    'images/dq.png',
    'images/dk.png',
    'images/dj.png',
    'images/dq.png',
    'images/dk.png',
    'images/d1.png',
    'images/d1.png',
    'images/cj.png',
    'images/cq.png',
    'images/ck.png',
    'images/cj.png',
    'images/cq.png',
    'images/ck.png',
    'images/c1.png',
    'images/c1.png'  
  ];

  hardGame = _.shuffle(hardGame) 

  $('#hard-game').show();

  var eGame = $('.hardcard');
  for(i=0; i < eGame.length; i++){
    // $(eGame[i]).css('background-image', 'url(' + easyGame[i] + ')');
    eGame[i].src = hardGame[i];
  }
  setTimeout(function() 
  {
    eGame.css('opacity', 0.0)
    //do something special
  }, 2500);}

function startIns(){
  // console.log('insane');
}

function showScore(){
  $('#scoreboard').show();
};

