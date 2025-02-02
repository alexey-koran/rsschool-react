interface ApiResponse<T> {
  results: T[];
}

export const handleFetch = async <T>(url: string): Promise<ApiResponse<T>> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `API request error. ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();

  return {
    results: data.results || [],
  };
};
