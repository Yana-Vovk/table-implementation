import React from 'react';
import { TableContainer } from './tableStyle';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

const Table = () => {
  const findAllCheckBoxes = () => {
    let arrayOfCheckboxes = [];
    const a = document.getElementsByClassName("checkbox");
    arrayOfCheckboxes = [...a];
    return arrayOfCheckboxes;
  };

  const toggleCheckboxOn = () => {
    const arrayOfCheckboxes = findAllCheckBoxes();
    arrayOfCheckboxes.map((item)=>(item.checked = true));
  };

  const toggleCheckboxOff = () => {
    const arrayOfCheckboxes = findAllCheckBoxes();
    arrayOfCheckboxes.map((item) => (item.checked = false));
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