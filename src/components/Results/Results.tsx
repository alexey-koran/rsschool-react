import { Component } from 'react';

import type { Planet } from '../../types/Planet';

interface Props {
  results: Planet[];
}

export class Results extends Component<Props> {
  render() {
    const { results } = this.props;

    return (
      <div>
        {results.length > 0 ? (
          <ul>
            {results.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <p>{item.population}</p>
                <p>{item.climate}</p>
                <p>{item.diameter}</p>
                <p>{item.gravity}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div>No results.</div>
        )}
      </div>
    );
  }
}
