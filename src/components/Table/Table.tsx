import { Component } from 'react';

interface TableProps<T> {
  columns: string[];
  data: T[];
}

export class Table<T extends Record<string, string>> extends Component<
  TableProps<T>
> {
  render() {
    const { columns, data } = this.props;

    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
