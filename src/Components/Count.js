import React from 'react';
import s from "../App.module.css";

export const Count = (props) => {

    let classForMaxCount = props.count === props.maxCount ? s.maxCount : "";

    return (
        <div className={classForMaxCount}>
            {props.count}
        </div>
    );
};

export default Count;

