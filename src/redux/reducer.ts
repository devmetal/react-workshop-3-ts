import { IState } from '../types/IState';
import * as Actions from './actions';

const defaultState: IState = {
  current: 0,
  step: 1,
};

export default (state: IState = defaultState, action: Actions.IUserAction): IState => {
  const { type, payload } = action;
  switch (type) {
    case Actions.USER_NEXT:
      return { ...state, current: payload };
    case Actions.USER_SET_STEP:
      return { ...state, step: payload };
    default:
      return state;
  }
};
