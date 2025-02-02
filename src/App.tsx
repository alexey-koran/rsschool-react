import { Component } from 'react';

import type { Planet } from './types/Planet';

import { Search } from './components/Search';
import { Results } from './components/Results';

import './App.css';

interface State {
  query: string;
  results: Planet[];
  loading: boolean;
  error: Error | null;
}

export class App extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      query: '',
      results: [],
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    const savedQuery = localStorage.getItem('searchQuery') ?? '';

    this.setState({ query: savedQuery });
  }

  setSearchResults = (results: Planet[]) => {
    this.setState({ results });
  };

  setLoading = (loading: boolean) => {
    this.setState({ loading });
  };

  setError = (error: Error | null) => {
    this.setState({ error });
  };

  render() {
    const { query, results, loading, error } = this.state;

    return (
      <div className="app">
        <Search
          query={query}
          setSearchResults={this.setSearchResults}
          setLoading={this.setLoading}
          setError={this.setError}
        />

        <div className="results-section">
          {loading && <div>Loading...</div>}

          {error && <div>{error.message}</div>}

          <Results results={results} />
        </div>
      </div>
    );
  }
}
