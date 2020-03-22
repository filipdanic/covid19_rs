import React from 'react';

export default ({
  columns,
  data,
  historicalNotes,
}: {
  columns: Array<any>,
  data: Array<any>
  historicalNotes: any
}) =>
  <table>
    <thead>
      <tr>
        {columns.map(column =>
          <th key={column.field}>{column.label}</th>
        )}
      </tr>
    </thead>
    <tbody>
      {data.map(row =>
        <tr key={row.date}>
          {columns.map(column =>
            <td key={column.field}>
              <span>{row[column.field]}</span>
              {historicalNotes[column.field] && historicalNotes[column.field][row[column.field]] ?
                <span className='info-note'>
                  {historicalNotes[column.field][row[column.field]]}
                </span> : null}
            </td>
          )}
        </tr>
      )}
    </tbody>
  </table>;
