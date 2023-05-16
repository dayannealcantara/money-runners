import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  user:{},

};

function salao(state = INITIAL_STATE, action) {
  switch (action.type) {   
    case types.SET_USER: {
      return produce(state, (draft) => {
        draft.userForm = { ...state.userForm, ...action.payload };
      });
    }
    default:
      return state;
  }
}

export default salao;