// 04_ReactTable deck: creating table from react-table library

import { useTable } from "react-table";
import { useMemo } from 'react';


function Table({ data }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Student Name', accessor: 'studName',},
      {
        Header: 'Student Age', accessor: 'studAge',
      },
      {
        Header: 'Student Gender', accessor: 'studGender',},
    ], [] );

    const tableInstance = useTable({ columns, data });
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      tableInstance;
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;    