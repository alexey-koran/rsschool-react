import { Component } from 'react';

interface TableProps<T extends Record<keyof T, unknown>> {
  columns: (keyof T)[];
  data: T[];
}

export class Table<T extends Record<keyof T, unknown>> extends Component<
  TableProps<T>
> {
  render() {
    const { columns, data } = this.props;

    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={String(column)}>{String(column)}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td key={String(column)}>{String(row[column])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
