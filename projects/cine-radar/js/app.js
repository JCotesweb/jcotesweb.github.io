const API_KEY = 'TU_API_KEY'; // 👈 Sustituye por tu API Key TMDb
const API_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const form = document.getElementById('genre-form');
const moviesDiv = document.getElementById('movies');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  moviesDiv.innerHTML = '<p class="text-center text-[#00FF41]">Cargando recomendaciones...</p>';

  const selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked'))
    .map(checkbox => checkbox.value)
    .join(',');

  if (!selectedGenres) {
    moviesDiv.innerHTML = '<p class="text-center text-red-500">Selecciona al menos un género.</p>';
    return;
  }

  try {
    const response = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenres}&sort_by=popularity.desc`);
    const data = await response.json();
    displayMovies(data.results);
  } catch (error) {
    moviesDiv.innerHTML = '<p class="text-center text-red-500">Error al cargar las películas. Intenta más tarde.</p>';
    console.error(error);
  }
});

function displayMovies(movies) {
  moviesDiv.innerHTML = '';
  if (movies.length === 0) {
    moviesDiv.innerHTML = '<p class="text-center text-gray-400">No se encontraron películas.</p>';
    return;
  }
  movies.forEach(movie => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('bg-[#1e1e1e]', 'p-4', 'text-white', 'shadow-lg');
    movieEl.innerHTML = `
      <img src="${IMAGE_URL}${movie.poster_path}" alt="${movie.title}" class="w-full">
      <h3 class="mt-2 text-lg text-[#00FF41]">${movie.title}</h3>
      <p class="text-sm text-gray-300">${movie.overview.substring(0, 100)}...</p>
    `;
    moviesDiv.appendChild(movieEl);
  });
}

