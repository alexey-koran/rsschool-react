import { Component, type ChangeEvent } from 'react';

interface Props {
  value: string;
  placeholder: string;
}

interface State {
  value: string;
}

export class Input extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}
