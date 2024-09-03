//A function to generate a random number
function generateRandomNum(num) {
    return Math.floor(Math.random() * num);
};

//A buffer to hold the final result
var message = [];

const firstPart = ['You', 'They', 'He', 'She'];
const secondPart = ['will', 'did', 'will never'];
const thirdPart = ['love', 'hate', 'die'];

let optionFirst = generateRandomNum(firstPart.length);
let optionSecond = generateRandomNum(secondPart.length);
let optionThird = generateRandomNum(thirdPart.length);

console.log(optionFirst);
console.log(optionSecond);
console.log(optionThird);

message.push(firstPart[optionFirst]);
message.push(secondPart[optionSecond]);
message.push(thirdPart[optionThird]);

formattedMessage = message.join(' ');
console.log(formattedMessage);