import React from 'react';
import Table from '@material-ui/core/Table';
import TableHeader from './TableHeader';
import TableContent from './TableContent';

const DataTable = ({ columns, data, className, bgColor }) => {
    return (
        <Table>
            <TableHeader columns={columns} className={className}></TableHeader>
            <TableContent columns={columns} data={data} bgColor={bgColor}></TableContent>
        </Table >
    );
};

export default DataTable;