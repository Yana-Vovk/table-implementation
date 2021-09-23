import React from 'react';
import { TableContainer } from './tableStyle';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

const Table = ({searchFunction}) => {
  const findAllCheckBoxes = () => {
    let arrayOfCheckboxes = [];
    const checkboxList = document.getElementsByClassName("checkbox");
    arrayOfCheckboxes = [...checkboxList];
    return arrayOfCheckboxes;
  };

  const toggleCheckboxOn = () => {
    const arrayOfCheckboxes = findAllCheckBoxes();
    arrayOfCheckboxes.map((item) => (item.checked = true));
  };

  const toggleCheckboxOff = () => {
    const arrayOfCheckboxes = findAllCheckBoxes();
    arrayOfCheckboxes.map((item) => (item.checked = false));
  };

  const changeFnc = (ifChange) => {
    searchFunction (ifChange);
  }

    return (
       <TableContainer>
        <TableHead
          switchOn={toggleCheckboxOn}
          switchOff={toggleCheckboxOff}
        />
        <TableBody changeFunction={changeFnc}/>
      </TableContainer>
    )
}

export default Table;