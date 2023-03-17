const search = async (query) => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=fbb30ca9&s=${query}`)
    const movies = await res.json()
    return movies
}

export default search
