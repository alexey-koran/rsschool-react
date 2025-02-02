import { Component, type ReactNode } from 'react';

interface Props {
  onClick: () => void;
  children: ReactNode;
}

export class Button extends Component<Props> {
  render() {
    const { onClick, children } = this.props;

    return <button onClick={onClick}>{children}</button>;
  }
}
