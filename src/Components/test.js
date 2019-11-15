import React from 'react';
import s from '../App.module.css';
import Setting from "../Components/Setting";
import Display from "../Components/Display";
import {connect} from "react-redux";
import {incrementCountAC, maxCountAC, resCountAC, startCountAC} from "../Redux/Reducer";


class Counter extends React.Component {

    componentDidMount() {
        this.restoreState();
    };

    state = {
        isHidden: false
    };

    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem("our-state");
        if (stateAsString != null) {
            state = JSON.parse(stateAsString);
            this.setState(state)
        }
    };

    changeHidden = () => {
        this.setState({isHidden: !this.state.isHidden})
    };

    incrementCount = () => {
        this.props.increment();
    };

    resCount = () => {
        this.props.res(this.props.state.startCount);
    };

    handlerChangeStartCount = (e) => {
        let newValue = Number(e.currentTarget.value);
        this.props.newCount(newValue)
    };

    handlerChangeMaxCount = (e) => {
        this.props.newChangeMaxCount(Number(e.currentTarget.value));
    };

    render = () => {
        let show = this.state.isHidden;
        return (
            <div className={s.App}>
                {!show &&
                <Setting handlerChangeStartCount={this.handlerChangeStartCount}
                         handlerChangeMaxCount={this.handlerChangeMaxCount}
                         changeHidden={this.changeHidden}/>}
                {show &&
                <Display incrementCount={this.incrementCount}
                         resCount={this.resCount}
                         changeHidden={this.changeHidden}/>}
            </div>
        );
    }
}

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




