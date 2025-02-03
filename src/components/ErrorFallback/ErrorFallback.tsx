import { Component } from 'react';

import { Button } from '../Button';

import './ErrorFallback.css';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export class ErrorFallback extends Component<ErrorFallbackProps> {
  render() {
    const { error, resetErrorBoundary } = this.props;

    return (
      <div className="error-fallback" role="alert" aria-live="assertive">
        <p>Something went wrong:</p>

        <pre className="message">{error.message}</pre>

        <Button theme="blue" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    );
  }
}
