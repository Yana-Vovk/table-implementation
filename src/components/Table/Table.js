import React from 'react';
import { TableContainer } from './tableStyle';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

const Table = () => {

  const toggleCheckboxOn = () => {
    
  };

  const toggleCheckboxOff = () => {
    
  };    
    return (
       <TableContainer>
        <TableHead
          switchOn={toggleCheckboxOn}
          switchOff={toggleCheckboxOff}
        />
        <TableBody/>
      </TableContainer>
    )
}

export default Table;