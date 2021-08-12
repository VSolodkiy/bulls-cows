import React from 'react';

const ResultTableItems = ({id, digit, bulls, cows}) => {
  return (
    <tr>
      <td> {id} </td>
      <td> {digit} </td>
      <td> {bulls} bulls &amp; {cows} cows</td>
    </tr>
  )
}

export default ResultTableItems;