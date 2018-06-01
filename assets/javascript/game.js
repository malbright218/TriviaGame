$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 15,
		reset: function() {
			this.time = 15;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What year was Enzo Ferrari born in?',
	possibleAnswers : ['A. 1898',
				 'B. 1902',
				 'C. 1889',
				 'D. 1895'],
	flags : [true, false, false, false],
	answer : 'A. 1898'
};

var q2 = {
	question: 'What percent of Ferraris are sold in the famous red color?',
	possibleAnswers: ['A. 35%',
				 'B. 45%',
				 'C. 55%',
				 'D. 65%'],
	flags : [false, true, false, false],
	answer : 'B. 45%'
};

var q3 = {
	question : 'In what Italian town is Ferrari headquartered?',
	possibleAnswers : ['A. Milan',
				 'B. Modena',
				 'C. Maranello',
				 'D. Marsala'],
	flags : [false, true, false, false],
	answer : 'B. Modena'
};

var q4 = {
	question : 'What year did a Ferrari win its first Formula 1 race?',
	possibleAnswers : ['A. 1951',
				 'B. 1952',
				 'C. 1953',
				 'D. 1954'],
	flags : [true, false, false, false],
	answer : 'A. 1951'
};

var q5 = {
	question : 'What is the most powerful Ferrari road car ever produced?',
	possibleAnswers : ['A. Enzo',
				 'B. F50',
				 'C. LaFerrari',
				 'D. F40'],
	flags : [false, false, true, false],
	answer : 'C. LaFerrari'
};

var q6 = {
	question : 'In 2013, a Ferrari 250 GTO sold for a record price at auction.  How much was it sold for?',
	possibleAnswers : ['A. $ 52 million',
				 'B. $ 38 million',
				 'C. $ 18 million',
				 'D. $ 7 million'],
	flags : [true, false, false, false],
	answer : 'A. $ 52 million'
};

var q7 = {
	question : 'What model was the first road car to break the 200 mph barrier?',
	possibleAnswers : ['A. 288 GTO',
				 'B. F50',
				 'C. F40',
				 'D. Enzo'],
	flags : [false, false, true, false],
	answer : 'C. F40'
};

var q8 = {
	question : 'The first car to bear the prancing horse and shield was not a Ferrari but this Italian automaker. ',
	possibleAnswers : ['A. Lamborghini',
				 'B. Barchetta',
				 'C. Lancia',
				 'D. Alfa Romeo'],
	flags : [false, false, false, true],
	answer : 'D. Alfa Romeo'
};

var q9 = {
	question : 'Despite winning 15 Formula 1 world championships, Ferrari has only won this many with an Italian driver.',
	possibleAnswers : ['A. 0',
				 'B. 2',
				 'C. 4',
				 'D. 6'],
	flags : [false, true, false, false],
	answer : 'B. 2'
};

var q10 = {
	question : 'Ferrari\'s last Formula 1 world championship came in 2007 with this driver',
	possibleAnswers : ['A. Fernando Alonso',
				  'B. Rubens Barrichello',
				  'C. Kimi Raikkonen',
				  'D. Michael Schumacher'],
	flags : [false, false, true, false],
	answer : 'C. Kimi Raikkonen'
};

var q11 = {
	question : 'A 250 California GT Spyder replica was famously driven and destroyed in this movie.',
	possibleAnswers : ['A. Top Gun',
				  'B. Days of Thunder',
				  'C. Fast Times at Ridgemont High',
				  'D. Ferris Bueller\'s Day Off'],
	flags : [false, false, false, true],
	answer : 'D. Ferris Bueller\'s Day Off'
};

var q12 = {
	question : 'Ferrari\'s racing team is known as \"Scuderia Ferrari\". What does scuderia mean?',
	possibleAnswers : ['A. Horse',
				  'B. Stable',
				  'C. Engine',
				  'D. Racing'],
	flags : [false, true, false, false],
	answer : 'B. Stable'
};

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
//		for (var i=0; i<questionArray.length; i++) {
//			$('.question').append('<p>'+questionArray[i].question+'</p>');
//			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
//				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
//			}
//			$('#possibleAnswers').on('click', function() {


//		console.log("click");
//		countdownTimer.start();
//		for (var i = 0; i < questionArray.length; i++) {
//			console.log(i);

//			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
//			$('.question').html(questionArray[i].question);
//			while (countdownTimer != 0) {

//			}
		
//	});
//	$('#startButton').click(countdownTimer.start);

//}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});