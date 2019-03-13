
$(document).on("click", userAnswer);
function userAnswer(){
    
    var selectedAns = $("choices-0").val();
    $('#choices-0').append(selectedAns);


};

var questionSets = [
     {
        question: 'When did the classic Bad Luck Brian Meme originate?',
        choices: [{ answer: '2019', correct: false }, 
            { answer: '2004', correct: false },
            { answer: '1998', correct: false },
            { answer: '2012', correct: true }
        ],
        userPick: 3,
    },
     
    {
        question: 'What was believed to be said moments before this picture?',
        choices:['beep beep lettuce', 'LEEROY JENKINSSSS', "Let's get this bread", 'Can I have yo numba?'],
        correctAnswer: 2,
        incorrectAnswers: [0,1,3]
    },

    {
        question:'Which New York rapper is portrayed here?',
        choices:['Childish Gambino', 'Jay Z', 'Ellen(From the hit show Ellen)', 'Conceited'],
        correctAnswer: 3,
        incorrectAnswers: [0,1,2]
    },

    {
        question: 'With the rise of bitcoin in 2012, which cryptocurrency acquired this image as their logo?',
        choices: ['dogecoin', 'acorns', 'silacoin', 'ruff'],
        correctAnswer: 0, 
        incorrectAnswers: [1,2,3]
    },

    {
        question: 'Which "anime" series does this character originate from?',
        choices: ['Naruto Shippuden', 'Pokemon', 'Digimon', 'Breaking Bad'],
        correctAnswer: 1, 
        incorrectAnswers: [0,2,3]
    },

    {
        question: 'When you see this image, what can you assume is about to happen next?',
        choices: ['Jimmies will get rustled', 'Your minecraft house will get blown up with tnt', 'Sudden fear', 'All of the above'],
        correctAnswer: 3, 
        incorrectAnswers: [0,1,2]
    },

    {
        question:'Finish this phrase: Do you know ______?',
        choices: ['the way', 'know where my mom is', 'how to get to cookout', 'literally just the number three'],
        correctAnswer: 0,
        incorrectAnswers: [1,2,3]
    },

    {
        question: 'If you see this image you can only assume that..',
        choices: ["it's a leap year", "In nineteen niety-six, The Undertaker threw Mankind off of Hell in a Cell, plummeting sixteen feet to an announcer's table", 'SNL is making another skit about Trump', 'It is Wednesday my dudes'],
        correctAnswer: 3, 
        incorrectAnswers: [0,1,2]
    }
];


function q0(){
    $('#question-0').html(questionSets[0].question);

    // for loops that generates choices from the array of objects
    for (var i = 0; i < questionSets[0].choices.length; i++) {
        $('#choices-0').append('<input name="check" value="'+questionSets[0].choices[i].answer + '">' + questionSets[0].choices[i].answer + '</input>');

        $('input').prop('type', 'radio');


    }
    console.log('You chose: '+ questionSets[0].userPick);

checkAnswer();

};
q0();

function q1(){
    $('#question-1').html(questionSets[1].question);
    
    for (var i = 0; i < questionSets[1].choices.length; i++) {
        $('#choices-1').append('<input name="check">' + questionSets[1].choices[i] + '</input>');
        $('input').prop('type', 'radio');


    }
    
};
q1();

function q2(){
    $('#question-2').html(questionSets[2].question);
    
    for (var i = 0; i < questionSets[2].choices.length; i++) {
        $('#choices-2').append('<input name="check">' + questionSets[2].choices[i] + '</input>');
        $('input').prop('type', 'radio');
    }
}
q2();

function q3(){
    $('#question-3').html(questionSets[3].question);
    
    for (var i = 0; i < questionSets[3].choices.length; i++) {
        $('#choices-3').append('<input name="check">' + questionSets[3].choices[i] + '</input>');
        $('input').prop('type', 'radio');
    }
}
q3();

function q4(){
    $('#question-4').html(questionSets[4].question);
    
    for (var i = 0; i < questionSets[4].choices.length; i++) {
        $('#choices-4').append('<input name="check">' + questionSets[4].choices[i] + '</input>');
        $('input').prop('type', 'radio');
    }
}
q4();
function q5(){
    $('#question-2').html(questionSets[5].question);
    
    for (var i = 0; i < questionSets[5].choices.length; i++) {
        $('#choices-5').append('<input name="check">' + questionSets[5].choices[i] + '</input>');
        $('input').prop('type', 'radio');
    }
}
q5();

function q6(){
    $('#question-6').html(questionSets[6].question);
    
    for (var i = 0; i < questionSets[6].choices.length; i++) {
        $('#choices-6').append('<input name="check">' + questionSets[6].choices[i] + '</input>');
        $('input').prop('type', 'radio');
    }
}
q6();
function q7(){
    $('#question-7').html(questionSets[7].question);
    
    for (var i = 0; i < questionSets[7].choices.length; i++) {
        $('#choices-7').append('<input name="check">' + questionSets[7].choices[i] + '</input>');
        $('input').prop('type', 'radio');
    }
}
q7();


// $("button").click(userAnswer);


function checkAnswer() {
    if (questionSets[0].userPick) {
        correct++;
    }
    else if(questionSets[0].userPick!=questionSets[0].userPick) {
        incorrect++;
    }
    else {
        unanswered++;
    }
}
console.log(checkAnswer);


    // $("#choices-0").on("click", userAnswer);





// $('question').html('<img' + questionSetss.imgFile[0]+'>');


var correct = 0;
var incorrect = 0;
var unanswered = 0;


// timing stuff

var running = false;
// sets to 500
var number = 10;
var intervalID;


function startTimeout(){
    if (!running) {
        intervalID = setInterval(decrement, 1000);
        running = true;
    }
};


function decrement() {
    number--;
    $("#timer").html("<h2>Time left: " + number + "</h2>");

    if (number === 0) {
      //  ...run the stop function.
      stop();
      alert("Oops! Looks like you ran out of time");
      submit();
    }
  }

  function submit() {
      clearInterval(intervalID);
      $('#results').html('<h2> You scored ' + correct + ' correct, ' + incorrect + ' incorrect, and left ' + unanswered + ' unanwered </h2>')
  }


$("#start").on("click", startTimeout);
$("#submit").on("click", submit);


// var quiz = function(quiz_name) {
//     this.quiz_name = quiz_name;
    
//     this.questions = [];
//   }
  


// var testImg = 'assets/images/DocumentFragment.jpg';
// var testQ = [
//     {
//     question: "the?",
//     answer: {
//         a: 'yeet',
//         b: 'yah',
//         c: 'trick',
//         d: 'daddy'
//     },
//     corrChoice: 'b'
// },
// {
//     question: "ya?",
//     answer: {
//         a: 'yeet',
//         b: 'yah',
//         c: 'trick',
//         d: 'daddy'
//     },
//     corrChoice: 'd'
// },
