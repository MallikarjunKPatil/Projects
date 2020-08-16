
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

const request = new XMLHttpRequest()
request.open('GET','http://restcountries.eu/rest/v2/all')
request.send()
request.addEventListener('readystatechange',(e)=>{

    if(e.target.readyState === 4 && e.target.status === 200)
    {   
        const data= JSON.parse(e.target.responseText)
        const country= data.find((country) => country.alpha2Code === 'IN')
        console.log(country.name);
    }
})
