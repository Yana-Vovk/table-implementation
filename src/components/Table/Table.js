import React, {useState} from 'react';
import { TableContainer } from './tableStyle';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import employeeItems from '../../employees.json';

const Table = ({ searchFunction }) => {
  const [contacts, setContacts] = useState(employeeItems);
  
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

   const deleteContactFunc = (contactId) => {
     console.log('delete ', contactId);
     setContacts((prevState) => (prevState.filter((contact) => contact.id !== contactId)
    ));
    }


    return (
       <TableContainer>
        <TableHead
          switchOn={toggleCheckboxOn}
          switchOff={toggleCheckboxOff}
        />
        <TableBody
          changeFunction={changeFnc}
          deleteContact={deleteContactFunc}
          arrayOfEmployees={contacts}/>
      </TableContainer>
    )
}

export default Table;