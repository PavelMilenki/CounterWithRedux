import React from 'react';
import s from '../App.module.css';

export const Value = (props) => {
    let classForInputStartError = props.startCount >= props.maxCount
    || props.startCount < 0 ? s.inputStartError : s.inputStart;
    let classForInputMaxError = props.startCount >= props.maxCount
    || props.startCount < 0 ? s.inputMaxError : s.inputMax;
    return (
        <div className={s.value}>
            <span className={s.textStart}>start value:</span>
            <input
                className={classForInputStartError}
                type="number"
                value={props.startCount}
                onChange={props.handlerChangeStartCount}/>
            <span className={s.textMax}>max value:</span>
            <input
                className={classForInputMaxError}
                type="number"
                value={props.maxCount}
                onChange={props.handlerChangeMaxCount}/>
        </div>
    )
};

export default Value;


