import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import "./cardForm.scss";

export default function CardFrom({ setValues }) {


    const yupSchema = yup.object({
        name: yup
                .string()
                .required("can't be blank"),
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
        formState: { errors },
    } = useForm({
        resolver: yupResolver(yupSchema),
        mode: "onSubmit", 
    });

    const onSubmit = (values) => {
        setValues(values);
    }


    return (
        <form onSubmit={ handleSubmit(onSubmit) } >
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
    )
}
