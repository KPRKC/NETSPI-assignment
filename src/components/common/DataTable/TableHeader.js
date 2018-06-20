import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { arrayOf, string, shape } from 'prop-types';

const TableHeader = ({ columns, className }) => {
    return (
        <TableHead className={className}>
            <TableRow>
                {columns.map(colObj => (<TableCell key={colObj.id}>{colObj.displayName}</TableCell>))}
            </TableRow>
        </TableHead>
    );
};

TableHeader.propTypes = {
    columns: arrayOf(shape({
        id: string,
        displayName: string,
    })).isRequired,
    className: string
}

export default TableHeader;
