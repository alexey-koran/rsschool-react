import { Component, type ReactNode } from 'react';

import './Button.css';

interface Props {
  onClick: () => void;
  children: ReactNode;
}

export class Button extends Component<Props> {
  render() {
    const { onClick, children } = this.props;

    return (
      <button className="button" onClick={onClick}>
        {children}
      </button>
    );
  }
}
