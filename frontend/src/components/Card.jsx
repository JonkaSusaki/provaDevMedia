import React from 'react'
import '../styles/components/Card.css'

export default function Card (props) {
    return (
        <div className="card">
            <div className="card-title">{props.title} - {props.category}</div>
            <div className="card-content">{props.content}</div>
            <div className="card-button">
                <div className="button">Acessar</div>
            </div>
        </div>
    )
}