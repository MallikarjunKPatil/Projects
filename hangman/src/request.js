const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    }
    else {
        throw new Error('Unable to fetch puzzle')
    }
}

export {getPuzzle as default}

const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
        
        if (response.status === 200) {
            const data= await response.json()
            return data.find((country) => country.alpha2Code === countryCode)
            
        }
        else {
            throw new Error('Error Occured while fetching country')
        }
}



const getCountryOld = (countryCode) => new Promise((resolve, reject) => {

    const request = new XMLHttpRequest()
    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()
    request.addEventListener('readystatechange', (e) => {

        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const countryObject = data.find((country) => country.alpha2Code === countryCode)
            resolve(countryObject)
        }
        else if (e.target.readyState === 4) {
            reject('Error Occured while fetching country')
        }
    })
})



const getLocation = async () => {
    //http://ipinfo.io/json?token=71803beb56f904
    const response = await fetch('http://ipinfo.io/json?token=71803beb56f904')
        if(response.status === 200){
            return await response.json()
        }
        else
        {
            throw new Error('Error Occured while fetching location')
        }
}


const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}