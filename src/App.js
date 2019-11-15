import React from 'react';
import Counter from "./Components/Counter";
import {Provider} from "react-redux";
import store from "./Redux/Store";


export const App = () => {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    )
};

export default App



