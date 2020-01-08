import React, {useState} from 'react';
import s from '../App.module.css';
import Setting from "../Components/Setting";
import Display from "../Components/Display";
import {connect} from "react-redux";
import {incrementCount, maxCount, resCount, startCount} from "../Redux/Reducer";



export const Counter = (props) => {

    const [editMode, setEditMode] = useState(false);

    const displayEditMode = () => {
        setEditMode(false)
    };

    const settingEditMode = () => {
        setEditMode(true);
    };

    const incrementCount = () => {
        props.incrementCount();
    };

    const resCount = () => {
        props.resCount(props.state.startCount);
    };

    const handlerChangeStartCount = (e) => {
        let newValue = Number(e.currentTarget.value);
        props.startCount(newValue)
    };

    const handlerChangeMaxCount = (e) => {
        let newValue =Number(e.currentTarget.value);
        props.maxCount(newValue);
    };

    return (
        <div className={s.App}>
            {!editMode &&
            <Setting handlerChangeStartCount={handlerChangeStartCount}
                     handlerChangeMaxCount={handlerChangeMaxCount}
                     settingEditMode={settingEditMode}/>}
            {editMode &&
            <Display incrementCount={incrementCount}
                     resCount={resCount}
                     displayEditMode={displayEditMode}/>}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        state
    }
};

const ConnectedCounter = connect(mapStateToProps,{
    incrementCount,
    resCount,
    startCount,
    maxCount})(Counter);

export default ConnectedCounter;




