import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { App } from './App.tsx';

import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorFallback } from './components/ErrorFallback';

const container = document.getElementById('root');

if (container === null) {
  throw new Error('Root not found');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
