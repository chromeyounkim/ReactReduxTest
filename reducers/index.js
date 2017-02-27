import {SUM, SUBTRACT, SET_DIFF} from '../actions';
import {combineReducers} from 'redux';

const initialState =  {
  value: 0,
  diff: 1
};


const counter = (state = initialState, action) => {
  switch(action.type) {
    case SUM:
     return Object.assign({}, state, {value: state.value + state.diff});
    case SUBTRACT:
     return Object.assign({}, state, {value:state.value - state.diff});
    case SET_DIFF:
     return Object.assign({}, state, {diff: action.diff});
    default:
     return state;
  }
};


const extra = (state={value: 'TBD'}, action) => {
  switch(action.type) {
    default:
     return state;
  }
};

const app = combineReducers({counter, extra});

export default app;
