import styled from 'styled-components';

const TableStyled=styled.table `
   font-size:16px;
    border-collapse: separate;
    background:#fff;
    border-radius:5px;
    margin:50px auto;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3); 
    max-width:90%;
    min-width:60%;
    th{
      padding: 0 2em;
      text-align:center;
      color:black;
    }

tbody tr td {
  font-family: 'Open Sans', sans-serif;
  font-weight:400;
  color:#5f6062;
  font-size:16px;
  padding:20px 20px 20px 20px;
  border-bottom:1px solid #e0e0e0;
  
}

tbody tr:nth-child(2n) {
  background:#f0f3f5;
}

tbody tr:last-child td {
  border-bottom:none;
  &:first-child {
   border-radius:5px;
  }
  &:last-child {
    border-radius:5px;
  }
}

`

export {TableStyled}