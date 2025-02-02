import { Component } from 'react';

import type { Planet } from '../../types/Planet';

import { Input } from '../Input';
import { Button } from '../Button';

import { handleFetch } from '../../utils/fetch';
import { API_URL } from '../../constants';

interface Props {
  query: string;
  setSearchResults: (results: Planet[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: Error | null) => void;
}

export class Search extends Component<Props> {
  handleSearch = async () => {
    const { query, setSearchResults, setLoading, setError } = this.props;

    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      localStorage.setItem('searchQuery', trimmedQuery);
    }

    setLoading(true);
    setError(null);

    try {
      const { results } = await handleFetch<Planet>(
        `${API_URL}?search=${trimmedQuery}`
      );

      setSearchResults(results || []);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error('An unknown error occurred!'));
      }
    } finally {
      setLoading(false);
    }
  };

  render() {
    const { query } = this.props;

    return (
      <div className="search-section">
        <Input value={query} placeholder="Enter search query" />

        <Button onClick={this.handleSearch}>Search</Button>
      </div>
    );
  }
}
