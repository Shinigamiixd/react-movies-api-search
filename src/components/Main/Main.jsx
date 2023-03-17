import React, { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import OneMovie from "../OneMovie/OneMovie"

const Main = () => {
    const [moviesFromApi, setMoviesFromApi] = useState([])

    const setResults = (movies) => {
        setMoviesFromApi(movies)
    }

    return (
        <div>
            <SearchBar setResults={setResults}/>
            <OneMovie moviesFromApi={moviesFromApi}/>
        </div>
    )
}

export default Main
