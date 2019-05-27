// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* query selectors for the 5 buttons
 */
var button1=document.querySelector('#button1');
var button2=document.querySelector('#button2');
var button3=document.querySelector('#button3');
var button4=document.querySelector('#button4');
var button5=document.querySelector('#button5');
var answerButton=document.querySelector('#button6');
var resetButton=document.querySelector('#button7');

var text = document.querySelector('#text');




// my arrays
var array1 = ['Micheal Jordan','Justin Bieber','Frankestein','Jon Snow','Ricky Martin','Harry Potter','Mel Gibson','Mike tyson'];
var array2 = ['ate','danced with','kissed','went to fishing with','hire','went shopping with','went for dinner with','married','has beaten','did not talk to'];
var array3 = ['a funny','an enourmous','a moldy','a chipped','a bloody','a naughty','a fat','a dead','stinky','antibacterial'];
var array4 = ['fish',' lady','polar bear','donkey','bigmac','monkey brain','noodle','zombie','timbits','darklord','Pickles']
var array5 = ['on the bed','in bathroom','on my dream',' in parallel universe','in Casablanca','in Londons back streets','in Endonesia','in Washington Dc '];




// all my arrays have 5 element so I can use that function for all of the arrays in order to have randomize words.
function random(array1) {
	return array1[Math.floor(Math.random() * array1.length)];
 }
 
 // different variables for random words
var randomWord1 = random(array1);
var randomWord2  = random(array2);
var randomWord3  = random(array3);
var randomWord4  = random(array4);
var randomWord5  = random(array5);


var story =''; 
 
var array6 = [randomWord1,randomWord2,randomWord3,randomWord4,randomWord5] //I created this array to have a random array story

var key=0;

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak

// first five button gonna read the array by these functions
button1.onclick = function() {
	textToSpeak=random(array1);
	speakNow(textToSpeak);
	
	
	if (key == 0){

	
		story=textToSpeak+'';
	
	 }
	
	 else{
		story=story+' '+textToSpeak+'';
	 }
	


	 key=1;
}

button2.onclick = function() {
	textToSpeak=random(array2);
	speakNow(textToSpeak);
	story=story+' '+textToSpeak+'';
	key=1;

	
}

button3.onclick = function() {
	textToSpeak=random(array3);
	speakNow(textToSpeak);
	story=story+' '+textToSpeak+'';
	key=1;
}

button4.onclick = function() {
	textToSpeak=random(array4);
	speakNow(textToSpeak);
	story=story+' '+textToSpeak+'';
	key=1;
}

button5.onclick = function() {
	textToSpeak=random(array5);
	speakNow(textToSpeak);
	story=story+' '+textToSpeak+'';
	key=1;
}

//this is the speaking and showing the answer 
answerButton.onclick = function() {
	
 if (key == 0){

	
	alert('Please pick some words');
	document.location.reload(true);

 }

 else{
	
	speakNow(story);
	
	// to get the text
	
	text.innerHTML=story;
 }





	

}


//reset button 
resetButton.onclick = function() {
	
	
	document.location.reload(true);
}








document.body.style.backgroundImage = "url('https://www.kingfisher.agency/Blog%20images/shutterstock_654506083.png')";
























