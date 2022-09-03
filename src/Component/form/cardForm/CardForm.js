import React from 'react';
import "./cardForm.scss";

export default function CardFrom() {
    return (
        <form>
            <div className="form-name">
                <label>Cardholder Name</label>
                <input type="text" />
            </div>
            <div className="form-card-num">
                <label>Card Number</label>
                <input type="number" />
            </div>
            <div className="form-info">
                <div className="date">
                    <label>Exp. Date (MM/YY)</label>
                    <input type="number" />
                    <input type="number" />
                </div>
                <div className="cvc">
                    <label>CVC</label>
                    <input type="number" />
                </div>
            </div>
            <div>
            <button className="btn">
                Confirm
            </button>
            </div>
        </form>
    )
}
