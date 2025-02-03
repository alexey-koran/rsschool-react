import { Component } from 'react';

import { Button } from '../Button';

import './BugglyButton.css';

interface State {
  hasError: boolean;
}

export class BugglyButton extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  createBug = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('UI error!');
    }

    return (
      <div className="buggy-button">
        <Button theme="blue" onClick={this.createBug}>
          Create ErrorBoundary error
        </Button>
      </div>
    );
  }
}
