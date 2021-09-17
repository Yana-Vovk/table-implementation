import React from 'react';
import { CustomCheckbox } from './tableItemStyle';
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const TableItem = ({number,name,age,height,weight,salary}) => {
    return (
        <>
            <td>
                    <label>
                        <CustomCheckbox type="checkbox" />
                    </label>
            </td>
            <td>{number}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{height}</td>
            <td>{weight}кг</td>
            <td>${salary}</td>
            <td><FiEdit2 /></td>
            <td><FiTrash2 /></td>
        </>
    );
}

export default TableItem;

