import { Component } from 'react';

import type { Planet } from '../../types/Planet';

import { Table } from '../Table';

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

    return (
      <div className="results-section">
        {loading && <div>Loading...</div>}

        {error && <div>{error.message}</div>}

        <div className="results">
          {results.length > 0 ? (
            <Table<Planet> columns={columns} data={results} />
          ) : (
            <div>No results.</div>
          )}
        </div>
      </div>
    );
  }
}
