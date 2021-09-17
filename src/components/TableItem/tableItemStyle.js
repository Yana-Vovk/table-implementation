import styled from 'styled-components';
import icon from '../../icons/checkmark.svg';

export const CustomCheckbox = styled.input`
-webkit-appearance: none;
-moz-appearance: none;
background-color: #FFFFFF;
display: inline-block;
width: 24px;
height: 24px;
border-radius: 4px;
border: 1px solid #E4E4E4;
margin-left: 22px;

&:checked{
border: 1px solid #55A985;
background: url(${icon}) 0 0 no-repeat;
background-position: center center;
background-size: 70%;
background-color: #FFFFFF;
}
`;

export const TableDate = styled.td`
min-width: 80px;
`;
