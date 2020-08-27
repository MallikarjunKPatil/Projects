class Hangman {

    constructor(allwords, remainingGuesses){
        this.allwords = allwords.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.statusOfGame = 'playing'
    }
    calStatus(){
        
        let isFinished = this.allwords.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
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

        if (this.remainingGuesses === 0  ) {
        this.statusOfGame = 'failed'     
        }
        else if (isFinished) {
        this.statusOfGame = 'finished'      
        }
        else{
        this.statusOfGame = 'playing'
        }
    }

    makeGuess(guessletter){
        
        guessletter = guessletter.toLowerCase()
   
        if( this.remainingGuesses > 0){  
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
    }
    get puzzle(){
        let puzzle = ''
        this.allwords.forEach((letter) => {
            this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*'
        })
        return puzzle
    }

    get statusMessage(){
        if( this.statusOfGame === 'playing'){
            return `Guesses left:${this.remainingGuesses}`
        }
        else if(this.statusOfGame === 'failed'){
            return `Nice Try! The Word was "${this.allwords.join('')}"`
        }
        else
        { 
            return `Great Work! You guessed the word`
        }
    }
}

export {Hangman as default}

