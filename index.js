var readlineSync = require("readline-sync");
var score = 0;
function welcome(){
  var username = readlineSync.question("What's you name? ");
  console.log("Hello " + username );
  console.log("Welcome to Map Quiz game.");
  console.log("Let's findout captials of Indian States!");
  console.log("---------------");
}

function play(question,answer){
  var useranswer = readlineSync.question(question);

  if(useranswer == answer){
    console.log("Your answer is correct!!");
    score = score+1;
  }
  else{
    console.log("Your answer is incorrect!!");
  }
  console.log("Current Score = " + score);
  console.log("---------------");
}

questions = [
  {
    question : `What is the capital of Orissa? 
    a. Bhubneshwar
    b. Puri
    c. Ranchi
    
    `,
    answer:`a`
  },
  {
    question : `1. What is the capital of Tripura? 
    a. Shillong
    b. Agartala
    c. Itanagar
    
    `,
    answer:`b`
  },
  {
    question : `2. What is the capital of Orissa? 
    a. Bhubneshwar
    b. Puri
    c. Ranchi
    
    `,
    answer:`a`
  },
  {
    question : `3 . What is the capital of Chattisgarh?? 
    a. Raigarh
    b. Puri
    c. Raipur
    
    `,
    answer:`c`
  },
  {
    question : `4.  What is the capital of Gujarat? 
    a. Ahmedabad
    b. Gandhinagar  
    c. Vadodara
    
    `,
    answer:`b`
  },
  {
    question : `5. What is the capital of Sikkim? 
    a. Gangtok
    b. Shillong
    c. Manipal
    
    `,
    answer:`a`
  },
  {
    question : `6. What is the capital of Jharkhand? 
    a. Ranchi
    b. Jamshedpur
    c. Bokaro
    
    `,
    answer:`a`
  },
  {
    question : `7. What is the capital of Arunachal Pradesh? 
    a. Gangtok
    b. Itanagar
    c. Manipal
    
    `,
    answer:`b`
  },
  {
    question : `7. What is the capital of Nagaland? 
    a. Kohima
    b. Imphal
    c. Aizawl
    
    `,
    answer:`a`
  }
]

function playgame() {
  for(let i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}
var highScores = [
  {
    name: "Abhishek",
    score: 7,
  },
  {
    name: "Karan",
    score: 5,
  },
]
function highscore(){
  console.log("You Scored " + score);
  console.log("Check out high scores");
  highScores.forEach(x => console.log(x.name," : " ,x.score));
}

welcome();
playgame();
highscore();