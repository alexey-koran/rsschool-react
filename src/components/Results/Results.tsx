import { Component } from 'react';

import type { Planet } from '../../types/Planet';

import { Table } from '../Table';

import './Results.css';

interface Props {
  results: Planet[];
  loading: boolean;
  error: Error | null;
}

const columns: (keyof Planet)[] = [
  'name',
  'population',
  'climate',
  'terrain',
  'diameter',
  'gravity',
];

export class Results extends Component<Props> {
  render() {
    const { results, loading, error } = this.props;

    return error !== null ? (
      <div className="error-message">{error.message}</div>
    ) : (
      <div className="results-section">
        <div className="results">
          {results.length === 0 && !loading ? (
            <div className="empty-message">No results.</div>
          ) : (
            <Table<Planet>
              columns={columns}
              data={results}
              isLoading={loading}
            />
          )}
        </div>
      </div>
    );
  }
}
