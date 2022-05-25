let userName = "Dakota";
const sayHello = (input) =>
  typeof input === "string"
    ? console.log(`Hello, ${input}!`)
    : console.log("Hello!");
const userQuestion = "Will I get a decent job?";
console.log(`${userName} asks: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy, so yes";
    break;
  case 3:
    eightBall = "Cannot predict no";
    break;
  case 4:
    eightBall = "Yes";
    break;
  case 5:
    eightBall = "My sources say yes";
    break;
  case 6:
    eightBall = "Outlook good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}
console.log(eightBall);
