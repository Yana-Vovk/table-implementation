import React from 'react';
import { TblHead } from './tableHeadStyle';

const TableHead = () => {
    return (
        <TblHead>
            <tr>
                <th>
                    <input type="checkbox"/>
                </th>
                <th>№</th>
                <th>ФИО</th>
                <th>Возраст (лет)</th>
                <th>Рост</th>
                <th>Вес</th>
                <th>Зарплата</th>
                <th></th>
                <th></th>
            </tr>
        </TblHead>
    )
}

export default TableHead;