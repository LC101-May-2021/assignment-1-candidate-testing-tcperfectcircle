const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ['True or false: 5000 meters = 5 kilometers: ', '(5 + 3)/2 * 10 = ?: ', 'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?: ', 'Who was the first American woman in space?: ', 'What is the minimum crew size for the International Space Station (ISS)?: '];
let correctAnswers = ['True', '40', 'Trajectory', 'Sally Ride', '3'];
let candidateAnswers = [];
let score = 0;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("Please enter your name: ");
 console.log('Candidate Name: ' + candidateName);
 console.log();
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++){
    questions[i] = input.question(questions[i]);
    console.log(`Your Answer: ${questions[i]}\nCorrect Answer: ${correctAnswers[i]}`)
    if (questions[i].toLowerCase() == correctAnswers[i].toLowerCase()){
     score+=1;
}
console.log();
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade = score / questions.length * 100;
  console.log(`>>> Overall Grade: ${grade}% (${score} of ${questions.length} responses correct) <<<`);
  if (score === questions.length){
    console.log(`>>> Status: PASSED <<<`)
  }
  else {
    console.log(`>>> Status: FAILED <<<`)
  }
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  
  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};