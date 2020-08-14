
const hangmanInst1= new Hangman('CAT',3)

console.log(hangmanInst1.getPuzzle());
console.log(hangmanInst1.remainingGuesses);

window.addEventListener('keypress',function(e){
    const guess = String.fromCharCode(e.charCode)
    hangmanInst1.makeGuess(guess)
   

    const puzzleEl= document.querySelector('#disPuzzle')
    const remainingGuessesEl = document.querySelector('#disremainingGuesses')
    
    puzzleEl.textContent = hangmanInst1.getPuzzle()
    remainingGuessesEl.textContent = hangmanInst1.remainingGuesses
    console.log(hangmanInst1.statusOfGame);
    console.log(hangmanInst1.guessedLetters);

})

