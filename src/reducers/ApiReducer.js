import ActionType from '../actions/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.RESET_MAP:
      return {
        ...state,

      };

    default:
      return state;
  }
};

