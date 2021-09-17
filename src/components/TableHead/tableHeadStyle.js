import styled from 'styled-components';
import icon from '../../icons/checkmark.svg';

export const CustomHeadCheckbox = styled.input`
-webkit-appearance: none;
-moz-appearance: none;
display: inline-block;
width: 24px;
height: 24px;
background: #FFFFFF;
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

export const TblHead = styled.tr`
height: 48px;
background-color: #F0F0F0;
text-align: justify;
`;

export const TblItem = styled.th`
&:nth-child(1){
    width:90px;
}
&:nth-child(2){
    width:120px;
}
&:nth-child(4){
    width:200px;
}
&:nth-child(6){
    width:120px;
}
`;