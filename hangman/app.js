
const hangmanInst1= new Hangman('CAT park',3)

console.log(hangmanInst1.puzzle);
console.log(hangmanInst1.remainingGuesses);

window.addEventListener('keypress',function(e){
    const guess = String.fromCharCode(e.charCode)
    hangmanInst1.makeGuess(guess)
   

    const puzzleEl= document.querySelector('#disPuzzle')
    const remainingGuessesEl = document.querySelector('#disremainingGuesses')

    puzzleEl.textContent = hangmanInst1.puzzle
    remainingGuessesEl.textContent = hangmanInst1.statusMessage
}
)
getPuzzle(6,(error,puzzle)=>{
    if(error){
        console.log(`Error is: ${error}`);
    }
    else{
        console.log(puzzle);
    }
})

getCountry('IN',(error,country)=>{
    if(error){
        console.log(`Error is: ${error}`);
    }
    else{
        console.log(`Country Name is ${country.name}`);
    }
    
})

