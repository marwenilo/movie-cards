import React from 'react'

// ★ ☆

const Rating = ({rate}) => {
    let stars = []
    for(let i = 0; i < 5; i++) {
        if(i < rate) {
            stars.push(<span>★</span>)
        }
        else {
            stars.push(<span>☆</span>)
        }
    }
    return (
        <div className="movieRating">{stars}</div>
    )
}

export default Rating
