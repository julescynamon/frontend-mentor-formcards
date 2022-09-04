import React from 'react';
import CardForm from './cardForm/CardForm';
import "./form.scss";

export default function Form({ setValues }) {
    return (
        <div className="card-form">
            <CardForm setValues={ setValues }/>
        </div>
    )
}
