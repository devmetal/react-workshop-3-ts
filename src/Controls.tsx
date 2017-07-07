import * as React from 'react';

interface ControlProps {
  onNext: () => void;
  onChangeStep: (step: number) => void;
  stepValue: number;
}

export class Controls extends React.Component<ControlProps, {}> {
  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    const num: number = Number(val);
    this.props.onChangeStep(num);
  }

  render() {
    const { onNext, stepValue } = this.props;
    return (
      <div>
        <button onClick={onNext}>Next</button>
        <div>
          <label>Step:</label>
          <input
            type="range"
            min="1"
            max="100"
            value={stepValue}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}
