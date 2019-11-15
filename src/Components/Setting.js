import React from 'react';
import s from '../App.module.css';
import Value from "./Value";
import Button from "./Button";
import {connect} from "react-redux";


export const Setting = (props) => {
    let disabledForSet = props.startCount >= props.maxCount || props.startCount < 0 ? 'disabled' : "";
    return (
        <div className={s.container}>
            <div className={s.count}>
                <Value startCount={props.startCount}
                       maxCount={props.maxCount}
                       handlerChangeStartCount={props.handlerChangeStartCount}
                       handlerChangeMaxCount={props.handlerChangeMaxCount}/>
            </div>
            < div className={s.buttons}>
                <div>
                    <Button onClickFunc={props.settingEditMode}
                            disabled={disabledForSet}
                            title={'Set'}/>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        startCount: state.startCount,
        maxCount: state.maxCount
    }
};

export default connect(mapStateToProps)(Setting);



