import React from 'react';
import "./card.scss";

export default function Card() {
    return (
        <div className="card-container">
            <div className="card-front">
                <div className="card-header">
                    <div className="circle"></div>
                    <div className="circle-empty"></div>
                </div>
                <p className="number-card">0000 0000 0000 0000</p>
                <div className="card-info">
                    <span className="name-card">JANE APPLESEED</span>
                    <span className="date-card">00/00</span>
                </div>
            </div>
            <div className="card-back">
                <span>000</span>
            </div>
        </div>
    )
}
