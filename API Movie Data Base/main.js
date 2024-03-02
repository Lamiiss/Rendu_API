function fetchFightClub() {

    return fetch(

'https://api.themoviedb.org/3/movie/550?api_key=58edf73b9b854e818e4e166c2c9bf398&language=fr-FR'

    )

    .then((response) => response.json())

}

async function displayFightClub() {
    const data = await fetchFightClub()
    document.getElementById("fight-club").innerHTML = `
    <h1>${data.title}</h1>
    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${
    data.title}" /> 

    `
}

displayFightClub()