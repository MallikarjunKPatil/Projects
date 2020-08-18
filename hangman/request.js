const getPuzzle = (wordCount)=> {
    
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=>{
        if(response.status === 200){
            return response.json()
        }
        else{
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data)=>{
        return data.puzzle
    })
}

const getCountry = (countryCode) => {
    const proxyurl = "http://cors-anywhere.herokuapp.com/";
    const url = "http://restcountries.com/v2/all?fields=name,alpha2Code,flag,callingCodes";
    return fetch(proxyurl+url).then((response)=>{
    if(response.status === 200){
        return response.json()
    }
    else
    {
        throw new Error('Error Occured while fetching country')
    }
    }).then((data)=>data.find((country)=> country.alpha2Code === countryCode))
}



const getCountryOld = (countryCode) => new Promise((resolve,reject)=>{
    
    const request = new XMLHttpRequest()
    request.open('GET','http://restcountries.eu/rest/v2/all')
    request.send()
    request.addEventListener('readystatechange',(e)=>{
    
        if(e.target.readyState === 4 && e.target.status === 200)
        {   
            const data= JSON.parse(e.target.responseText)
            const countryObject= data.find((country) => country.alpha2Code === countryCode)
            resolve(countryObject)
        }
        else if (e.target.readyState === 4 ){
            reject('Error Occured while fetching country')
        }
    })
})

