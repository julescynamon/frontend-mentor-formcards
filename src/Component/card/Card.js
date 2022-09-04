import React from 'react';
import "./card.scss";

export default function Card({values}) {

    return (
        <div className="card-container">
            <div className="card-front">
                <div className="card-header">
                    <div className="circle"></div>
                    <div className="circle-empty"></div>
                </div>
                <p className="number-card">{ values.number }</p>
                <div className="card-info">
                    <span className="name-card">{ values.name }</span>
                    <span className="date-card">{ values.month }/{ values.year }</span>
                </div>
            </div>
            <div className="card-back">
                <span>{ values.cvc }</span>
            </div>
        </div>
    )
}
