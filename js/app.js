const movies = [
  { releaseYear: 2002, name: 'A Era do Gelo' },
  { releaseYear: 2000, name: 'A Fuga das Galinhas' },
  { releaseYear: 2007, name: 'Bee Movie: A História de uma Abelha' },
  { releaseYear: 1976, name: 'Rocky: Um Lutador' },
  { releaseYear: 1979, name: 'Rocky II: A Revanche' },
  { releaseYear: 1982, name: 'Rocky III: O Desafio Supremo' },
  { releaseYear: 2004, name: 'De Repente 30' },
  { releaseYear: 2004, name: 'Homem-Aranha 2' }
]

const moviesTwo = [...movies, {}]

const compareNumbers = (a, b) => a - b


const getMovieName = movies.map(({ name }) => name)


const moviesOrderPerYear = movies
  .map(({ releaseYear}) => releaseYear)
  .sort(compareNumbers)

moviesOrderPerYear.forEach((year) => {
  console.log(year)
})

const renderMoviesList = () => {
  const moviesList = document.querySelector('[data-js="movies-list"]')
  const moviesPerYear = document.querySelector('[data-js="movies-perYear"]')
  const moviesListFragment = document.createDocumentFragment()
  const moviesPerYearFragment = document.createDocumentFragment()

  movies.map(({ name }) => {
    const li = document.createElement('li')
    li.innerText = `${name}`

    moviesListFragment.append(li)

  })

  moviesList.append(moviesListFragment)
  moviesPerYear.append(moviesPerYearFragment)
}



renderMoviesList()

// const li = document.createElement('li')
//     li.innerHTML = `${name}; ano de lançamento: <span class="highlighted-text">${releaseYear}</span>`

//     moviesPerYearFragment.append(li)