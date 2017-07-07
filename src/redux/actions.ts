import { IState } from '../types/IState';
import { Dispatch, Action } from 'redux';

export const USER_NEXT = 'USER_NEXT';
export const USER_SET_STEP = 'USER_SET_STEP';

export interface IUserAction extends Action {
  payload: number;
}

export const userNext = () => (
  dispatch: Dispatch<IState>,
  getState: () => IState) => {
    const { step, current } = getState();
    dispatch<IUserAction>({
      type: USER_NEXT,
      payload: current + step,
    });
};

export const userSetStep = (step: number): IUserAction => ({
  type: USER_SET_STEP,
  payload: step,
});
