import React from "react"
import styles from "./OneMovie.module.css"

const OneMovie = (props) => {
    const items = props.moviesFromApi.Search
    if (props.moviesFromApi.Response === "False") {
        return (
            <h1 className={styles.nofoundlol}>No Movies Found Bro</h1>
        )
    }
    return (
        <div className={styles.cardcontainer}>
            {items?.map((item) => (
                <div key={item.id} className={styles.itemcard}>
                    <div>
                        <h2>{item.Title}</h2>
                        <p>{item.Year}</p>
                    </div>
                    <a 
                    alt=""
                    href={`https://www.imdb.com/title/${item.imdbID}`}
                    rel="noreferrer"
                    target="_blank">
                        <img
                        src={item.Poster} 
                        className={styles.itemcardimg} 
                        alt=""/>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default OneMovie
