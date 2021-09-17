import React from 'react';
import { TableContainer } from './tableStyle';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

const Table = () => {
    return (
       <TableContainer>
        <TableHead />
        <TableBody/>
      </TableContainer>
    )
}

export default Table;