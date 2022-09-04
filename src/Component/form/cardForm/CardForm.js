import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import IconComplete from "../../../assets/images/icon-complete.svg";
import "./cardForm.scss";

export default function CardFrom({ setValues }) {

    const { isSubmit, setIsSubmit } = useState(false);

    const yupSchema = yup.object({
        name: yup
                .string()
                .required("can't be blank")
                .min(3, "must be at least 3 characters"),
        number: yup
                .number()
                .typeError("Wrong format, numbers only")
                .required("can't be blank")
                .min(16, "Too short"),
        month: yup
                .number()
                .typeError("Wrong format, numbers only")
                .required("can't be blank")
                .min(2, "Too short"),
        year: yup
                .number()
                .typeError("Wrong format, numbers only")
                .required("can't be blank")
                .min(2, "Too short"),
        cvc: yup
                .number()
                .typeError("Wrong format, numbers only")
                .required("can't be blank")
                .min(3, "Too short")
    })

    
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitSuccessful },
    } = useForm({
        resolver: yupResolver(yupSchema),
        mode: "onSubmit", 
    });
    
    
    const submit = (values) => {
        values.name = values.name.toLowerCase()
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
        values.number = values.number.toString().replace(/(.{4})(?=.)/g,"$1 ")
        setValues(values);
    }

    const refreshPage = () => {
        window.location.reload(false);
    }


    return (
        <>
        { isSubmitSuccessful ? (
            <div id='complete-cont'>
                <img id='complete' src={IconComplete} alt="succes"/>
                <h1 className='grats' >Thank You!</h1>
                <p className='p'>We've added your card details.</p>
                <button id='cont-btn' onClick={refreshPage} >Continue</button>
            </div>
        ) : (
            <form onSubmit={ handleSubmit(submit) } >
            <div className="form-name">
                <label>Cardholder Name</label>
                <input 
                    { ...register("name") } 
                    id="name" type="text" 
                    placeholder="e.g. Jane Appleseed" 
                    className={ errors.name ? "error" : "" }
                    />
                {errors.name && <p className="form-error">{errors.name.message}</p>}
            </div>
            <div className="form-card-num">
                <label>Card Number</label>
                <input 
                    { ...register("number") } 
                    id="number" type="number"  
                    placeholder="e.g. 1234 5678 9123 0000"  
                    className={ errors.number ? "error" : "" }
                    />
                {errors?.number && <p className="form-error">{errors.number.message}</p>}
            </div>
            <div className="form-info">
                <div className="date">
                    <label>Exp. Date (MM/YY)</label>
                    <div className="input-date">
                        <div className="input-date__date">
                            <input 
                                { ...register("month") } 
                                id="month" type="number" 
                                placeholder="MM" 
                                className={ errors.month ? "error" : "" }
                                />
                            {errors?.month && <p className="form-error">{errors.month.message}</p>}
                        </div>
                        <div className="input-date__date">
                            <input 
                                { ...register("year") } 
                                id="year" 
                                type="number" 
                                placeholder="YY" 
                                className={ errors.year ? "error" : "" } 
                                />
                            {errors?.year && <p className="form-error">{errors.year.message}</p>}
                        </div>
                    </div>
                </div>
                <div className="cvc">
                    <label>CVC</label>
                    <input 
                        { ...register("cvc") } 
                        id="cvc" 
                        type="number" 
                        placeholder="e.g. 123" 
                        className={ errors.cvc ? "error" : "" } 
                        />
                    {errors?.cvc && <p className="form-error">{errors.cvc.message}</p>}
                </div>
            </div>
            <div>
            <button className="btn">
                Confirm
            </button>
            </div>
        </form>
        )}
    </>
    )
}
