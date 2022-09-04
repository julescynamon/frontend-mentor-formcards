import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import "./cardForm.scss";

export default function CardFrom() {

    const yupSchema = yup.object({
        name: yup
                .string()
                .required("can't be blank"), 
        number: yup
                .number()
                .typeError("Wrong format, numbers only")
                .required("can't be blank")
                .min(16, "Too short")
                .max(16, "Too long"), 
        month: yup
                .number()
                .typeError("Wrong format, numbers only")
                .required("can't be blank")
                .min(2, "Too short")
                .max(2, "Too long"),
        year: yup
                .number()
                .typeError("Wrong format, numbers only")
                .required("can't be blank")
                .min(2, "Too short")
                .max(2, "Too long"),
        cvc: yup
                .number()
                .typeError("Wrong format, numbers only")
                .required("can't be blank")
                .min(3, "Too short")
                .max(3, "Too long")
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
        console.log(values);
    }


    return (
        <form onSubmit={ handleSubmit(onSubmit) } >
            <div className="form-name">
                <label>Cardholder Name</label>
                <input { ...register("name") } id="name" type="text" placeholder="e.g. Jane Appleseed" />
                {errors.name && <p className="form-error">{errors.name.message}</p>}
            </div>
            <div className="form-card-num">
                <label>Card Number</label>
                <input { ...register("number") } id="number" type="number" placeholder="e.g. 1234 5678 9123 0000" />
                {errors.number && <p className="form-error">{errors.number.message}</p>}
            </div>
            <div className="form-info">
                <div className="date">
                    <label>Exp. Date (MM/YY)</label>
                    <div className="input-date">
                        <div className="input-date__date">
                            <input { ...register("month") } id="month" type="number" placeholder="MM" />
                            {errors.month && <p className="form-error">{errors.month.message}</p>}
                        </div>
                        <div className="input-date__date">
                            <input { ...register("year") } id="year" type="number" placeholder="YY" />
                            {errors.year && <p className="form-error">{errors.year.message}</p>}
                        </div>
                    </div>
                </div>
                <div className="cvc">
                    <label>CVC</label>
                    <input { ...register("cvc") } id="cvc" type="number" placeholder="e.g. 123" />
                    {errors.cvc && <p className="form-error">{errors.cvc.message}</p>}
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
