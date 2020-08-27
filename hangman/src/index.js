import Hangman from './hangman'
import getPuzzle from './request'

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

    puzzleEl.innerHTML = ''
    remainingGuessesEl.textContent = hangmanInst1.statusMessage
    
    hangmanInst1.puzzle.split('').forEach((puzzleLetter)=>{
        const puzzleLetterEl = document.createElement('span')
        puzzleLetterEl.textContent = puzzleLetter
        puzzleEl.appendChild(puzzleLetterEl)
    })

}

const startGame = async () => {
    const puzzle = await getPuzzle(1)
    hangmanInst1 = new Hangman(puzzle,4)
    render()
}

document.querySelector('#reset').addEventListener('click',startGame)
startGame()