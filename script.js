const apiKey = '6719fb91653da7eceee03229b0ee7bb3';

// Fetch movies
function fetchMovies(endpoint) {
    let url = 'https://api.themoviedb.org/3' + endpoint + '?api_key=' + apiKey;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.results);
}

// Create movie tile
function createMovieTile(movie) {
    return `
        <div class="movie-tile">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3 style="color:red;">${movie.title}</h3>
            <p>Released: ${movie.release_date}</p>
            <p>${movie.overview}</p>
        </div>
    `;
}

// Display movies
function displayMovies(endpoint, gridId) {
    fetchMovies(endpoint).then(movies => {
        let grid = document.getElementById(gridId);
        grid.innerHTML = movies.map(createMovieTile).join('');
    });
}

// Load movies
displayMovies('/movie/popular', 'popular-grid');
displayMovies('/movie/top_rated', 'top-rated-grid');
displayMovies('/movie/upcoming', 'upcoming-grid');
