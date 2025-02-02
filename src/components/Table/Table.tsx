import { Component } from 'react';

import './Table.css';

interface TableProps<T extends Record<keyof T, unknown>> {
  columns: (keyof T)[];
  data: T[];
  isLoading: boolean;
}

export class Table<T extends Record<keyof T, unknown>> extends Component<
  TableProps<T>
> {
  render() {
    const { columns, data, isLoading } = this.props;

    if (isLoading) {
      return (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>{String(column)}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <tr key={index} className="shimmer-row">
                    {columns.map((_, colIndex) => (
                      <td key={colIndex}>
                        <div className="skeleton-cell"></div>
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{String(column).toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>{String(row[column])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
