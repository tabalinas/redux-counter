'use strict';

function createStore(reducer) {
    let state = 0;

    const getState = () => (state);

    const dispatch = (action) => {
        state = reducer(state, action);
    };

    return {
        getState,
        dispatch
    };
}

function reducer(state, action) {
    if(action.type === 'INCREMENT') {
        return state + action.amount;
    } else if(action.type === 'DECREMENT') {
        return state - action.amount;
    } else {
        return state;
    }
}

const store = createStore(reducer);

const incrementAction = {
    type: 'INCREMENT',
    amount: 10
};

store.dispatch(incrementAction);
console.log(store.getState());


const decrementAction = {
    type: 'DECREMENT',
    amount: 10
};

store.dispatch(decrementAction);
console.log(store.getState());
