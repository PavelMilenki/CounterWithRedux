const INC_COUNT = "reducer/INC_COUNT";
const RES_COUNT = "reducer/RES_COUNT";
const START_COUNT = "reducer/START_COUNT";
const MAX_COUNT = "reducer/MAX_COUNT";


const initialState = {
    count: 0,
    maxCount: 0,
    startCount: 0,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNT:
            return {
                ...state, count: state.count + 1
            };
        case RES_COUNT:
                      return {
                ...state, count: action.newStartCount
            };

        case START_COUNT:
            let value = action.newStartCount;
            return {
                ...state, startCount: value, count: value
            };
        case MAX_COUNT:
            return {
                ...state, maxCount: action.newMaxCount
            };
    }
    return state
};

export const incrementCount = () => {
    return {type: INC_COUNT}
};

export const resCount = (newStartCount) => {
    return {type: RES_COUNT, newStartCount}
};

export const startCount = (newStartCount) => {
    return {type: START_COUNT, newStartCount}
};

export const maxCount = (newMaxCount) => {
    return {type: MAX_COUNT, newMaxCount}
};

export default reducer