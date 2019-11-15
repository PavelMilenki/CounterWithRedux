import React from 'react';
import s from '../App.module.css';

export const Button = (props) => {
    return (
        <div>
            <button className={s.button}
                    onClick={props.onClickFunc}
                    disabled={props.disabled}>
                {props.title}
            </button>
        </div>
    );
};

export default Button;


