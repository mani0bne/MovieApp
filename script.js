/**Add all required URLS here */
const API_URL = ""
const IMG_PATH=""
const SEARCH_API = ""


/** Select main, form and search from the DOM*/
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


// Get initial movies
getMovies(API_URL)

//getMovies(API_URL)

//Define getMovies function
async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()

    console.log("data",data)
}

function showMovies(movies) {
    
}

function getClassByRate(vote) {
   
}

/** Add Event Listeners on form
 * Add functionality to search movies through api
 */
