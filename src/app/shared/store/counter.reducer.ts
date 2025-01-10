import { createReducer, on } from "@ngrx/store";
import { customIncrement, decrement, increment, rename, reset } from "./counter.actions";
import { initialState } from "./counter.state";

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}

const _counterReducer = createReducer(initialState, 
    on(increment, (state) => {
        return {
            ...state, 
            counter: state.counter + 1
        };
}), on(decrement, (state) => {
    return {
        ...state, 
        counter: state.counter - 1
    };
}), on(reset, (state, action) => {
    return {
        ...state, 
        counter: 0,
        channelName: action.channel
    };
}), on(customIncrement, (state, action) => {
    return {
        ...state, 
        counter: action.action === 'add'?state.counter+action.value: state.counter-action.value,
    };
}), on(rename, (state, action) => {
    return {
        ...state,
        channelName: action.channel
    };
}));
