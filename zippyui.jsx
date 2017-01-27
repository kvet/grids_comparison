import React from 'react';
import { render } from 'react-dom';
import DataGrid from 'react-datagrid';
import 'react-datagrid/index.css';

let columns = [
    { name: 'id', title: 'ID' },
    { name: 'title', title: 'Title' },
    { name: 'count', title: 'Count' } ];

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

render(<DataGrid
        idProperty='id'
        dataSource={rows}
        columns={columns}
        style={{height: 500}}/>, document.querySelector("#app"));