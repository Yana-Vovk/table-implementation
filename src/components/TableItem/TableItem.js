import React from 'react';
import { CustomCheckbox, EditIcon, DeleteIcon } from './tableItemStyle';

const TableItem = ({ number, name, age, height, weight, salary, filter }) => {
    return (
        <>
            <td>
                <label>
                    <CustomCheckbox className="checkbox" type="checkbox" onChange={filter}/>
                </label>
            </td>
            <td>{number}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{height}</td>
            <td>{weight}кг</td>
            <td>${salary}</td>
            <td><EditIcon/></td>
            <td><DeleteIcon/></td>
        </>
    );
}

export default TableItem;

