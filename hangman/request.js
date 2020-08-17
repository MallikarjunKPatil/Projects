const getPuzzle = (wordCount,callback)=>{

    const request = new XMLHttpRequest()
    request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
    request.addEventListener('readystatechange',(e)=>{
    
        if(e.target.readyState === 4 && e.target.status === 200)
        {   
            const data= JSON.parse(e.target.responseText)
            callback(undefined,data.puzzle)
        }
        else if(e.target.readyState === 4)
        {
            callback('Error Occured',undefined)
        }
    })}


const getCountry = (countryCode,callback) => {

    const request = new XMLHttpRequest()
    request.open('GET','http://restcountries.eu/rest/v2/all')
    request.send()
    request.addEventListener('readystatechange',(e)=>{
    
        if(e.target.readyState === 4 && e.target.status === 200)
        {   
            const data= JSON.parse(e.target.responseText)
            const countryObject= data.find((country) => country.alpha2Code === countryCode)
            callback( undefined ,countryObject)
        }
        else if (e.target.readyState === 4 ){
            callback('Error Occoured Country')
        }
    })
}

