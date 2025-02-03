import { Component, type ChangeEvent } from 'react';

import type { Planet } from '../../types/Planet';

import { Input } from '../Input';
import { Button } from '../Button';

import { handleFetch } from '../../utils/fetch';
import { API_URL } from '../../constants';

import './Search.css';

interface Props {
  setSearchResults: (results: Planet[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: Error | null) => void;
}

interface State {
  query: string;
}

export class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  componentDidMount() {
    const savedQuery = localStorage.getItem('searchQuery') ?? '';

    this.setState({ query: savedQuery });

    this.handleSearch(savedQuery);
  }

  handleSearch = async (query: string) => {
    const { setSearchResults, setLoading, setError } = this.props;

    const trimmedQuery = query.trim();

    localStorage.setItem('searchQuery', trimmedQuery);

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

  handleNetworkError = async () => {
    const { setSearchResults, setLoading, setError } = this.props;

    try {
      const { results } = await handleFetch<Planet>(`${API_URL}/schema`);

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

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query } = this.state;

    return (
      <div className="search-section">
        <Input
          value={query}
          onChange={this.handleInputChange}
          placeholder="Enter search query"
        />

        <Button onClick={() => this.handleSearch(this.state.query)}>
          Search
        </Button>

        <Button theme="blue" onClick={this.handleNetworkError}>
          Network Error
        </Button>
      </div>
    );
  }
}
