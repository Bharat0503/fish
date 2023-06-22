import ActionTypes from './types';

export default class Actions {

  static resetMap(action) {
    return {
      type: ActionTypes.RESET_MAP,
      payload: action
    };
  }



}
