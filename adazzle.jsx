import React from 'react';
import { render } from 'react-dom';
import ReactDataGrid from 'react-data-grid';

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

render(<ReactDataGrid
        columns={columns}
        rowGetter={(i) => rows[i]}
        rowsCount={rows.length}
        minHeight={500} />, document.querySelector("#app"));