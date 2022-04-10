var readlinesync = require('readline-sync');
let name = readlinesync.question("whats ur name cutie- ");
console.log("Hi! " + name + ", lets see how much u know me :)")
let questions={
  q1:"whats my full name? ",a1:"kartik gupta",
  q2:"whats my favorite food? paneer,chicken,mixveg,aloopuri,none- ",a2:"paneer",
  q3:"which outdoor activity do i like the most? football,cricket,basketball,badminton,calisthenics,none- ",a3:"football"
}
let score = 0;
let highscore = 0;
function quiz(question,answer){
  let ans = readlinesync.question(question);
  if(ans.toLowerCase()==answer){
    score+=10;
    console.log("correct! ur score is- "+ score);      
  }
  else{
    console.log("incorrect ans ur score is- "+score);
  }
}
quiz(questions.q1,questions.a1);
quiz(questions.q2,questions.a2);
quiz(questions.q3,questions.a3);
if(score>highscore){
  highscore = score;
  console.log("yay! u have new highscore, send me a screenshot for a special prize ;)")
}