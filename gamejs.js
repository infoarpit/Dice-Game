//dom manipulation
//document object model
//dom is used to connect scripts to javascript
//for each html box there is an object in the dom
// var score1=0;
// var score2=0;

//going to use array 
var gamePlaying=true;//state variable tell us condition of variable like game playing or not playing
var scores,roundScore,activePlayer,dice;

scores=[0,0];
roundScore=0;
activePlayer=0;// to keep track of player currently playing

//dice

//Math.floor(Math.random()*6)+1;

// console.log(dice);

//document object give us access to DOM
//text content place the content of the dice 
//queryselector is used to select 
//document.querySelector('#current-'+activePlayer).textContent=dice;//setter
//text content help to write only plain text
//whereas innerHTML method helps to use html also but have to put it in html
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';


//var x=document.querySelector('#score-0').textContent;//getter//just to read the value and store it in x
//console.log(x);

//using javascript we can also change css
//to hide something in css we set display property to none
//in javascript-

document.querySelector('.dice').style.display="none";//to change javscript css we use style method and write css property

//document get element by ID
document.getElementById('score-0').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-1').textContent='0';

//Events-
// notification sent to notify the code that something happend
// like clicking button resizing window,scrolling down or pressing a 
// key 
// Event Listeners perform action based on certain events
//Execution stack
//clickhandler()
//setup event handler
//call back function
//how to change image in an <img> element

//event will happen in roll dice button

//function btn(){
  
//}
//btn();//to call function

document.querySelector('.btn-roll').addEventListener('click',function(){
	
   if(gamePlaying){
	//1. random number
   var dice=Math.floor(Math.random() * 6)+1;

    //2.display result
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display="block";
    diceDOM.src='dice-'+dice+'.png';//to change the dice image
    

    //3.update the round score if the rolled number was not a 1
    if(dice !== 1 ){ //!== difference operator
    	//add score 
    	roundScore+=dice;
    	document.querySelector('#current-'+activePlayer).textContent=roundScore;
        
    }else{
    	//next player
    	//ternery operator
    	
        nextplayer();
    }   

   }

})

document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying){
	//add current score to global score 
    scores[activePlayer]+=roundScore;
   

	//update the UI
    document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];


	//Check if player won the game
    if (scores[activePlayer]>=15){
    	
    	document.querySelector("#name-"+activePlayer).textContent="Winner!";
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
    }else{

	//next player
	nextplayer();   
    }

    }





})


//next player
function nextplayer(){
	activePlayer===0 ? activePlayer=1:activePlayer=0;
    roundScore=0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');//change player 1 to player 2 by adding removing class
    document.querySelector('.player-1-panel').classList.toggle('active');
    // toggle can be used instead of add or remove class
        
    document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',function(){

    // reinitialize new game
    gamePlaying=true;
	scores=[0,0];
	activePlayer=0;
	roundScore=0;

	document.querySelector('.dice').style.display="none";//to change javscript css we use style method and write css property

    //document get element by ID
    document.getElementById('score-0').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector("#name-0").textContent="Player 1";
    document.querySelector("#name-1").textContent="Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

})


//setup event listenter click action
//btn is called by eventlistener
//if we directly write function in event listerner it
//will be anonymous function
//function(){
//
//}
//
// use functions to do not repeat principle
//state variable