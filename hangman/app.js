const puzzleEl= document.querySelector('#disPuzzle')
const remainingGuessesEl = document.querySelector('#disremainingGuesses')
let hangmanInst1


window.addEventListener('keypress',function(e){
    const guess = String.fromCharCode(e.charCode)
    hangmanInst1.makeGuess(guess)
    render()
}
)

const render = ()=>{
    puzzleEl.textContent = hangmanInst1.puzzle
    remainingGuessesEl.textContent = hangmanInst1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle(1)
    hangmanInst1 = new Hangman(puzzle,4)
    render()
}

document.querySelector('#reset').addEventListener('click',startGame)
startGame()

getCurrentCountry().then(country => {
    console.log(country.name);
}).catch(err => {
    console.log(err);
})


