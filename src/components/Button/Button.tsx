import { Component, type ReactNode } from 'react';

import './Button.css';

type ThemeType = 'green' | 'blue';

interface Props {
  onClick: () => void;
  children: ReactNode;
  theme?: ThemeType;
}

const colorMap: Record<ThemeType, string> = {
  green: 'button-green',
  blue: 'button-blue',
};

export class Button extends Component<Props> {
  render() {
    const { onClick, children, theme = 'green' } = this.props;

    const className = `button ${colorMap[theme]}`;

    return (
      <button type="button" className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
}
