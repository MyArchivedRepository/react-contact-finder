import React from 'react'

import "./card.css"

const Card = (props) => {
    return (
        <div className = "card">
            <div>
                <img alt = "profile-picture" src = {"https://robohash.org/"+props.id}></img>
            </div>            
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}

export default Card;