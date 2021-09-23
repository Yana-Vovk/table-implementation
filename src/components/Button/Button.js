import React from 'react';
import { Btn } from './buttonStyle';

//Не происходит перерендер кнопки при изменении зачения ifCheckedForBtn

const Button = ({ ifCheckedForBtn }) => {
    if (ifCheckedForBtn === true) {
        return (<Btn regular>Удалить выбранные</Btn>);
    } else {
        return (<Btn>Удалить выбранные</Btn>);
    }
}

export default Button; 