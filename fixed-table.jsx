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

class App extends React.Component {
    constructor() {
        super();

        this.columnTitles = {
            id: 'ID',
            title: 'Title',
            count: 'count'
        };

        this.columnWidths = {
            id: 50,
            title: 200,
            count: 200
        };

        this.state = {
            columnOrder: ['collapse'].concat(Object.keys(this.columnTitles)),
            collapsedRows: new Set()
        };

        this.toggleRow = this.toggleRow.bind(this);
        this.hideColumn = this.hideColumn.bind(this);
    }
    
    toggleRow(rowIndex) {
        let collapsedRows = this.state.collapsedRows;
        collapsedRows.has(rowIndex) ? collapsedRows.delete(rowIndex) : collapsedRows.add(rowIndex);
        this.setState({
            collapsedRows: collapsedRows
        })
    }
    
    hideColumn(columnKey) {
        let columnOrder = this.state.columnOrder;
        columnOrder.splice(columnOrder.indexOf(columnKey), 1)
        this.setState({
            columnOrder: columnOrder
        })
    }

    render() {
        return (
            <Table
                rowHeight={50}
                rowsCount={rows.length}
                rowHeightGetter={(index) => this.state.collapsedRows.has(index) ? 100 : 30}
                height={500}
                width={1000}
                headerHeight={50}>
                {this.state.columnOrder.map((columnKey, i) => {
                    return <Column
                        columnKey={columnKey}
                        key={i}
                        header={
                            <Cell>
                                {this.columnTitles[columnKey]}
                                {columnKey !== 'collapse' && <span style={{ marginLeft: '10px' }} onClick={() => this.hideColumn(columnKey)}>x</span>}
                            </Cell>}
                        cell={(e) => {
                            return columnKey === 'collapse'
                                ? <Cell onClick={() => this.toggleRow(e.rowIndex)}>></Cell>
                                : <Cell>{rows[e.rowIndex][e.columnKey]}</Cell>
                            }
                        }
                        align={columnKey === 'id' ? 'right' : 'left'}
                        fixed={i === 0}
                        width={this.columnWidths[columnKey] || 30}
                    />;
                })}
            </Table>
        );
    }
};

// Render your table
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);