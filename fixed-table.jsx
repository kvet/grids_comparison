import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.min.css'

let columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'count', name: 'Count' } ];

let rows = (() => {
    let rows = [];
    for (let i = 1; i < 1000; i++) {
      rows.push({
        id: i,
        title: 'Title ' + i,
        count: i * 1000
      });
    }

    return rows;
})();

// Render your table
ReactDOM.render(
  <Table
    rowHeight={50}
    rowsCount={rows.length}
    height={500}
    width={1000}
    headerHeight={50}>
    <Column
      columnKey="id"
      align="right"
      header={<Cell>ID</Cell>}
      cell={(e) => <Cell>{rows[e.rowIndex][e.columnKey]}</Cell>}
      width={200}
    />
    <Column
      columnKey="title"
      header={<Cell>Title</Cell>}
      cell={(e) => <Cell>{rows[e.rowIndex][e.columnKey]}</Cell>}
      width={100}
    />
    <Column
      columnKey="count"
      header={<Cell>Count</Cell>}
      cell={(e) => <Cell>{rows[e.rowIndex][e.columnKey]}</Cell>}
      width={200}
    />
  </Table>,
  document.getElementById('app')
);