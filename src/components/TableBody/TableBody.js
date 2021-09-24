import React from 'react';
import TableItem from '../TableItem';
import { TblBody, Row } from './tableBodyStyle';

const TableBody = ({changeFunction, deleteContact, arrayOfEmployees}) => {
    const calculateAge = (birthdayUnix) => {
        const birthday = new Date(birthdayUnix * 1000);
        const today = new Date();
        let age = today.getFullYear() - birthday.getFullYear();
        const m = today.getMonth() - birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }
        return age; 
    };

    const calculateHeight = (heightFeet) => {
        const foot = parseInt(heightFeet);
        const indexOfInch = heightFeet.indexOf("'");
        const inch = parseInt(heightFeet.slice(indexOfInch + 1));
        const heightCm = Math.round((foot * 12 + inch) * 2.54);
        const meter = Math.floor(heightCm / 100);
        const centimeter = heightCm % 100;
        return (`${meter}м ${centimeter}см`);
    }

    const calculateWeight = (weightPounds) => {
        return (Math.round(weightPounds * 0.45));        
    }

    const findCheck = () => {
        const boxChanged = true;
        changeFunction(boxChanged);
        return boxChanged;
    }

    return (
        <TblBody> 
            {arrayOfEmployees.map(({id,first_name,last_name,date_of_birth,height,weight,salary},index) => (
                <Row key={id}>
                    <TableItem
                        number={index+1}
                        name={first_name + ' ' + last_name}
                        age={calculateAge(date_of_birth)}
                        height={calculateHeight(height)}
                        weight={calculateWeight(weight)}
                        salary={salary}
                        filter={findCheck}
                        onDeleteContact={() => deleteContact(id)}
                    />
                </Row>
            ))}
        </TblBody>
    )
}

export default TableBody;