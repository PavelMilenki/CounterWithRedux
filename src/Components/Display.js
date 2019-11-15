import React from 'react';
import s from '../App.module.css';
import Count from "./Count";
import Button from "./Button";
import {connect} from "react-redux";

export const Display = (props) => {
    let disabledForInc = props.count === props.maxCount ? 'disabled' : ""
    || props.startCount < 0 ? 'disabled' : "";
    return (
        <div className={s.container}>
            <div className={s.count}>
                <Count count={props.count}
                       maxCount={props.maxCount}/>
            </div>
            <div className={s.buttons}>
                <div>
                    <Button onClickFunc={props.incrementCount}
                            disabled={disabledForInc}
                            title={'Inc'}/>
                </div>
                <div>
                    <Button onClickFunc={props.resCount}
                            title={'Reset'}/>
                </div>
                <div>
                    <Button onClickFunc={props.displayEditMode}
                            title={'Set'}/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.count,
        startCount: state.startCount,
        maxCount: state.maxCount
    }
};

export default connect(mapStateToProps)(Display);


