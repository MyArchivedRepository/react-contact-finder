import React from 'react';
import Card from "./card"

import "./card-list.css"


const CardList = (props) => {
    return (
        <div className = "card-list">
        {props.contacts.map((contact) => <Card key = {contact.id} id={contact.id} name={contact.name} email={contact.email}/> )}
            
        </div>
    )
}

export default CardList;