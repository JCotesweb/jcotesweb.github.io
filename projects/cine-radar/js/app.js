const API_KEY = '60b62280b961e137c79b65d6ce791cef'; 
const API_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

// Referencias a elementos del DOM
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const genreForm = document.getElementById('genre-form');
const yearFilter = document.getElementById('year-filter');
const ratingFilter = document.getElementById('rating-filter');
const sortFilter = document.getElementById('sort-filter');
const filterBtn = document.getElementById('filter-btn');
const clearBtn = document.getElementById('clear-btn');
const moviesDiv = document.getElementById('movies');
const resultsCount = document.getElementById('results-count');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

// Variables de estado
let currentPage = 1;
let totalPages = 1;
let currentSearchType = 'discover'; // 'discover' o 'search'
let lastSearchQuery = '';

// Event listeners
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSearch();
});
filterBtn.addEventListener('click', handleFilter);
clearBtn.addEventListener('click', clearFilters);
prevBtn.addEventListener('click', () => changePage(currentPage - 1));
nextBtn.addEventListener('click', () => changePage(currentPage + 1));

// Funciones principales
async function handleSearch() {
  const query = searchInput.value.trim();
  if (!query) {
    alert('Por favor, ingresa un título para buscar');
    return;
  }
  
  currentSearchType = 'search';
  lastSearchQuery = query;
  currentPage = 1;
  await searchMovies(query);
}

async function handleFilter() {
  currentSearchType = 'discover';
  currentPage = 1;
  await discoverMovies();
}

async function searchMovies(query, page = 1) {
  showLoading();
  
  try {
    const response = await fetch(
      `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
    );
    const data = await response.json();
    
    currentPage = page;
    totalPages = data.total_pages;
    
    displayMovies(data.results);
    updatePagination();
    updateResultsCount(data.total_results);
    
  } catch (error) {
    showError('Error al buscar películas. Intenta más tarde.');
    console.error(error);
  }
}

async function discoverMovies(page = 1) {
  showLoading();
  
  const selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked'))
    .map(checkbox => checkbox.value)
    .join(',');
  
  // Construir URL con filtros
  let url = `${API_URL}/discover/movie?api_key=${API_KEY}&page=${page}`;
  
  if (selectedGenres) {
    url += `&with_genres=${selectedGenres}`;
  }
  
  // Filtro por año
  const yearValue = yearFilter.value;
  if (yearValue) {
    if (yearValue.includes('-')) {
      if (yearValue === '2010-2014') {
        url += '&primary_release_date.gte=2010-01-01&primary_release_date.lte=2014-12-31';
      } else if (yearValue === '2000-2009') {
        url += '&primary_release_date.gte=2000-01-01&primary_release_date.lte=2009-12-31';
      } else if (yearValue === '1990-1999') {
        url += '&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31';
      } else if (yearValue === '1980-1989') {
        url += '&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31';
      } else if (yearValue === 'before-1980') {
        url += '&primary_release_date.lte=1979-12-31';
      }
    } else {
      url += `&primary_release_year=${yearValue}`;
    }
  }
  
  // Filtro por calificación
  const ratingValue = ratingFilter.value;
  if (ratingValue) {
    url += `&vote_average.gte=${ratingValue}`;
  }
  
  // Ordenamiento
  const sortValue = sortFilter.value;
  if (sortValue) {
    url += `&sort_by=${sortValue}`;
  }
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    currentPage = page;
    totalPages = data.total_pages;
    
    displayMovies(data.results);
    updatePagination();
    updateResultsCount(data.total_results);
    
  } catch (error) {
    showError('Error al cargar las películas. Intenta más tarde.');
    console.error(error);
  }
}

function displayMovies(movies) {
  moviesDiv.innerHTML = '';
  
  if (movies.length === 0) {
    moviesDiv.innerHTML = '<p class="text-center text-gray-400 col-span-full">No se encontraron películas.</p>';
    return;
  }
  
  movies.forEach(movie => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('bg-[#1e1e1e]', 'overflow-hidden', 'shadow-lg', 'hover:shadow-xl', 'transition-shadow', 'duration-300');
    
    const releaseDate = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
    const overview = movie.overview ? movie.overview.substring(0, 150) + '...' : 'Sin descripción disponible';
    const posterUrl = movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750/1e1e1e/00FF41?text=Sin+Imagen';
    
    movieEl.innerHTML = `
      <div class="relative">
        <img src="${posterUrl}" alt="${movie.title}" class="w-full h-64 object-cover">
        <div class="absolute top-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded">
          <span class="text-[#00FF41] font-bold">★ ${rating}</span>
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-bold text-[#00FF41] mb-2 line-clamp-2">${movie.title}</h3>
        <p class="text-gray-300 text-sm mb-3">${overview}</p>
        <div class="flex justify-between items-center text-sm text-gray-400">
          <span>📅 ${releaseDate}</span>
          <span>🗳️ ${movie.vote_count || 0} votos</span>
        </div>
        <div class="mt-3 flex justify-between items-center">
          <span class="text-xs text-gray-500">Popularidad: ${Math.round(movie.popularity || 0)}</span>
          <button onclick="showMovieDetails(${movie.id})" class="text-[#00FF41] hover:text-[#39FF14] text-sm font-medium">
            Ver detalles →
          </button>
        </div>
      </div>
    `;
    
    moviesDiv.appendChild(movieEl);
  });
}

async function showMovieDetails(movieId) {
  try {
    const response = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=es`);
    const movie = await response.json();
    
    const genres = movie.genres.map(g => g.name).join(', ');
    const runtime = movie.runtime ? `${movie.runtime} minutos` : 'N/A';
    const budget = movie.budget ? `$${movie.budget.toLocaleString()}` : 'N/A';
    const revenue = movie.revenue ? `$${movie.revenue.toLocaleString()}` : 'N/A';
    
    alert(`
🎬 ${movie.title} (${new Date(movie.release_date).getFullYear()})

📝 Descripción: ${movie.overview || 'Sin descripción disponible'}

🎭 Géneros: ${genres}
⏱️ Duración: ${runtime}
⭐ Calificación: ${movie.vote_average?.toFixed(1) || 'N/A'}/10
🗳️ Votos: ${movie.vote_count || 0}
💰 Presupuesto: ${budget}
💵 Recaudación: ${revenue}
    `);
    
  } catch (error) {
    alert('Error al cargar los detalles de la película');
    console.error(error);
  }
}

function clearFilters() {
  // Limpiar checkboxes de géneros
  document.querySelectorAll('input[name="genre"]').forEach(checkbox => {
    checkbox.checked = false;
  });
  
  // Limpiar filtros
  yearFilter.value = '';
  ratingFilter.value = '';
  sortFilter.value = 'popularity.desc';
  searchInput.value = '';
  
  // Limpiar resultados
  moviesDiv.innerHTML = '';
  resultsCount.textContent = '';
  currentPage = 1;
  totalPages = 1;
  updatePagination();
}

function changePage(page) {
  if (page < 1 || page > totalPages) return;
  
  if (currentSearchType === 'search') {
    searchMovies(lastSearchQuery, page);
  } else {
    discoverMovies(page);
  }
}

function updatePagination() {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages || totalPages === 0;
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
}

function updateResultsCount(totalResults) {
  resultsCount.textContent = `${totalResults} películas encontradas`;
}

function showLoading() {
  moviesDiv.innerHTML = '<div class="col-span-full text-center text-[#00FF41] py-8">Cargando...</div>';
  resultsCount.textContent = '';
}

function showError(message) {
  moviesDiv.innerHTML = `<div class="col-span-full text-center text-red-500 py-8">${message}</div>`;
  resultsCount.textContent = '';
}

// Cargar películas populares al inicio
window.addEventListener('load', () => {
  sortFilter.value = 'popularity.desc';
  discoverMovies();
});