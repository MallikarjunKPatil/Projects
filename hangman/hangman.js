const Hangman = function (allwords, remainingGuesses) {

    this.allwords = allwords.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.statusOfGame = 'playing'

}

Hangman.prototype.calStatus = function () {
    let isFinished = this.allwords.every(v => this.guessedLetters.includes(v))

    // let isFinished = true
    // this.allwords.forEach(element => {
    //     if (this.guessedLetters.includes(element)) {
    //     }
    //     else {
    //         isFinished = false
    //     }
    // });

    // const unguessedLetters = this.allwords.filter((word)=>{
    //     return !this.guessedLetters.includes(word)
    // })
    // let isFinished = unguessedLetters.length === 0

    if (this.remainingGuesses === 0) {
        this.statusOfGame = 'failed'
    }
    else if (isFinished) {
        this.statusOfGame = 'finished'
    }
    else {
        this.statusOfGame = 'playing'
    }
}


Hangman.prototype.makeGuess = function (guessletter) {
    guessletter = guessletter.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guessletter)
    const isBadGuess = !this.allwords.includes(guessletter)

    if (isUnique) {
        this.guessedLetters.push(guessletter)
    }
    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
    this.calStatus()
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.allwords.forEach((letter) => {
        this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*'
    })
    return puzzle
}





