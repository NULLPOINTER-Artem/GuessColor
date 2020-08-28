const COLOR = 'green';
let color = ' ';
let guessed = false;

for(let i = 1; i <= 3; i++) {
    color = prompt('Guess a color');
    
    if(color.toLowerCase() === COLOR) {
        alert(`You guessed color! it is ${COLOR}`);
        guessed = true;
        break;
    }
}

if(!guessed) {
    alert('You not guessed a color')
}