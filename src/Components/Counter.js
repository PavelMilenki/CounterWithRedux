import React, {useState} from 'react';
import s from '../App.module.css';
import Setting from "../Components/Setting";
import Display from "../Components/Display";
import {connect} from "react-redux";
import {incrementCountAC, maxCountAC, resCountAC, startCountAC} from "../Redux/Reducer";


export const Counter = (props) => {

    const [editMode, setEditMode] = useState(false);

    // const restoreState = () => {
    //     let state = state;
    //     let stateAsString = localStorage.getItem("our-state");
    //     if (stateAsString != null) {
    //         state = JSON.parse(stateAsString);
    //         this.setState(state)
    //     }
    // };

    const displayEditMode = () => {
        setEditMode(false)
    };

    const settingEditMode = () => {
        setEditMode(true);
    };

    const incrementCount = () => {
        props.increment();
    };

    const resCount = () => {
        props.res(props.state.startCount);
    };

    const handlerChangeStartCount = (e) => {
        let newValue = Number(e.currentTarget.value);
        props.newCount(newValue)
    };

    const handlerChangeMaxCount = (e) => {
        props.newChangeMaxCount(Number(e.currentTarget.value));
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

const mapDispatchToProps = (dispatch) => {
    return {
        increment() {
            const action = incrementCountAC();
            dispatch(action)
        },
        res(newStartCount) {
            const action = resCountAC(newStartCount);
            dispatch(action)
        },
        newCount(newStartCount) {
            const action = startCountAC(newStartCount);
            dispatch(action)
        },
        newChangeMaxCount(newMaxCount) {
            const action = maxCountAC(newMaxCount);
            dispatch(action)
        }
    }
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default ConnectedCounter;




