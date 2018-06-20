import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const TableContent = ({ data, columns, bgColor }) => {
    return (
        <TableBody style={{ backgroundColor: bgColor }}>
            {data.map((row) => {
                return (
                    <TableRow key={row.spect}>
                        {columns.map(colObj => (
                            <TableCell key={colObj.id}>
                                {row[colObj.id]}
                            </TableCell>
                        ))}
                    </TableRow>
                );
            })}
        </TableBody>
    )
};

export default TableContent;