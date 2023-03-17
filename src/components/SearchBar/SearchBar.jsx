import React, { useState } from "react"
import search from "../../services/productsService"
import styles from "./SearchBar.module.css"

const SearchBar = ({ setResults }) => {
    const [tempQuery, setTempQuery] = useState("")
    const [query, setQuery] = useState("")

    const handleChange = (event) => {
        setTempQuery(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault()
        getProducts()
    }

    const getProducts = () => {
        setQuery(tempQuery)
        console.log(query)
        console.log(tempQuery)
        if (query === "") return
        search(query).then((res) => {
            setResults(res)
        })
    }

    return (
        <form className={styles.searchcontainer}>
            <input
                type="text"
                value={tempQuery}
                placeholder="Search"
                onChange={handleChange}
                className={styles.searchbar}
            ></input>
            <button
                type="submit"
                onSubmit={handleClick}
                className={styles.searchbutton}>Search</button>
        </form>
    )
}

export default SearchBar
