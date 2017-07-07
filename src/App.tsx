import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as Actions from './redux/actions';
import { IState } from './types/IState';
import { Counter } from './Counter';
import { Controls } from './Controls';

interface IStateProps {
  current: number;
  step: number;
}

interface IDispatchProps {
  userNext: () => void;
  userSetStep: (val: number) => void;
}

interface Props extends IStateProps, IDispatchProps { }

class App extends React.Component<Props, {}> {
  render() {
    const {
      userNext,
      userSetStep,
      current,
      step
    } = this.props;

    return (
      <div className="counter">
        <Counter current={current} step={step} />
        <Controls
          stepValue={step}
          onChangeStep={userSetStep}
          onNext={userNext}
        />
      </div>
    );
  }
}

export default connect<IStateProps, IDispatchProps, {}>(
  (state: IState) => ({ current: state.current, step: state.step }),
  (dispatch: Dispatch<IState>) => ({
    userNext() {
      dispatch(Actions.userNext());
    },
    userSetStep(val: number) {
      dispatch(Actions.userSetStep(val));
    },
  })
)(App);
