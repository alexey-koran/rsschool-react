import { Component, type ChangeEvent } from 'react';

import './Input.css';

interface Props {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface State {
  value: string;
}

export class Input extends Component<Props, State> {
  componentDidUpdate(prevProps: Props) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    const { value, onChange } = this.props;

    return (
      <input
        className="input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}
