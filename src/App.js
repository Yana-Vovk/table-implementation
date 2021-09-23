import './App.css';
import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Table from './components/Table';

const Title = styled.h1`
  margin-bottom: 24px;
  margin-top: 0;
  color: #4C4C4C;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17; 
`;

const Wrapping = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

function App() {
  const findCheckBoxes = (ifCheckboxChange) => {
    let arrayOfCheckboxes = [];
    const checkboxList = document.getElementsByClassName("checkbox");
    arrayOfCheckboxes = [...checkboxList];
    if (ifCheckboxChange===true) {
      const ifAnyChecked = arrayOfCheckboxes.find(item => item.checked === true);
      if (ifAnyChecked === undefined) {
        const ifChecked = false;
        console.log('false ',ifChecked );
        return ifChecked;
      } else {
        const ifChecked = true;
        console.log('true ',ifChecked);
        return ifChecked;
      }
    }
  };
  
  return (
    <Wrapping>
      <Title>Таблица пользователей</Title>
      <Table searchFunction={findCheckBoxes} />
      <Button ifCheckedForBtn={findCheckBoxes()} />
    </Wrapping>
  );
} 

export default App;
