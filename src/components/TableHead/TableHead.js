import React from 'react';
import { TblHead, CustomHeadCheckbox, TblItem } from './tableHeadStyle';

const TableHead = ({switchOn, switchOff}) => {
    const handleCheckClick = (e) => {
        if (e.currentTarget.checked === true) {
            switchOn();
            console.log('checked');
        } else {
            switchOff();
           console.log('unchecked'); 
        }
    };

    return (
        <thead>
            <TblHead>
                <TblItem>
                    <label>
                        <CustomHeadCheckbox type="checkbox" onClick={handleCheckClick}/>
                    </label>
                </TblItem>
                <TblItem>№</TblItem>
                <TblItem>ФИО</TblItem>
                <TblItem>Возраст (лет)</TblItem>
                <TblItem>Рост</TblItem>
                <TblItem>Вес</TblItem>
                <TblItem>Зарплата</TblItem>
                <TblItem></TblItem>
                <TblItem></TblItem>
            </TblHead>
        </thead>
    )
}

export default TableHead;