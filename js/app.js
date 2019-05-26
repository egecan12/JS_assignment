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
var randomize=document.querySelector('#button6');
var resetButton=document.querySelector('#button7');

var text = document.querySelector('#text');




// my arrays
var array1 = ['Micheal Jordan','justin Bieber','frankestein','Jon Snow','Ricky Martin'];
var array2 = ['ate','danced with','tickled','went to fishing with','beaten'];
var array3 = ['a funny','an enourmous','a moldy','a old','a bloody'];
var array4 = ['fish',' lady','polar bear','donkey','bigmac'];
var array5 = ['on the bed','in bathroom','on my dream',' in parallel universe','in Casablanca'];




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


var key;
 

var array6 = [randomWord1,randomWord2,randomWord3,randomWord4,randomWord5] //I created this array to have a random array story



/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak

// first five button gonna read the array by these functions
button1.onclick = function() {
	textToSpeak=random(array1);
	speakNow(textToSpeak);
}

button2.onclick = function() {
	textToSpeak=random(array2);
	speakNow(textToSpeak);
}

button3.onclick = function() {
	textToSpeak=random(array3);
	speakNow(textToSpeak);
}

button4.onclick = function() {
	textToSpeak=random(array4);
	speakNow(textToSpeak);
}

button5.onclick = function() {
	textToSpeak=random(array5);
	speakNow(textToSpeak);
}

//this is the random story
randomize.onclick = function() {
	textToSpeak=array6;
	speakNow(textToSpeak);
	
	// to get the text
	text.innerHTML=array6;

	

}


//reset button 
resetButton.onclick = function() {
	text.innerHTML="";
	textToSpeak = "";	
	document.location.reload(true);
}








document.body.style.backgroundImage = "url('https://www.kingfisher.agency/Blog%20images/shutterstock_654506083.png')";























