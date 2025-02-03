import { Component } from 'react';

import type { Planet } from './types/Planet';

import { Search } from './components/Search';
import { Results } from './components/Results';

import './App.css';

interface State {
  results: Planet[];
  loading: boolean;
  error: Error | null;
}

export class App extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      results: [],
      loading: false,
      error: null,
    };
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
    const { results, loading, error } = this.state;

    return (
      <div className="app">
        <Search
          setSearchResults={this.setSearchResults}
          setLoading={this.setLoading}
          setError={this.setError}
        />

        <Results results={results} loading={loading} error={error} />
      </div>
    );
  }
}
