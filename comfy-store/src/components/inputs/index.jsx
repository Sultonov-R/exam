import React from "react";
import "./index.css";


const Input = (props) => {

    const{formName, labelName, inputTitle, type, inputClass, labelClass, value, onChange, onSubmit} = props;

    return(
        <>
        <form onSubmit={onSubmit} className={formName}>
            <label htmlFor={labelName} className={labelClass}>{inputTitle}</label>
            <input value={value} onChange={onChange} className={inputClass} type={type} />
        </form>
        </>
    )
}

export default Input