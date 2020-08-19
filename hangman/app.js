
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

getPuzzle(2).then((puzzle)=>{
    console.log(puzzle);
}).catch((err) => {
    console.log(err);
})

// getCountry('IN').then((data)=>{
//     console.log(`Country code is: ${data.name}`);
// }).catch((err) => {
//     console.log(err);
// })

getCurrentCountry().then(country => {
    console.log(country.name);
}).catch(err => {
    console.log(err);
})

// getLocation().then((data)=>{
//     console.log(`Your city is: ${data.city} in a region ${data.region} in a country ${data.country}`);
//     return getCountry(data.country)
// }).then((data)=>{
//     console.log(`Country name is: ${data.name}`);
// }).catch((err)=>{
//     console.log(err);
// })
