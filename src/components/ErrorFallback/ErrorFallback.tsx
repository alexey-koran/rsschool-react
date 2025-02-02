import { Component } from 'react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export class ErrorFallback extends Component<ErrorFallbackProps> {
  render() {
    const { error, resetErrorBoundary } = this.props;

    return (
      <div role="alert" aria-live="assertive">
        <p>Something went wrong:</p>

        <pre>{error.message}</pre>

        <button type="button" onClick={resetErrorBoundary}>
          Try again
        </button>
      </div>
    );
  }
}
