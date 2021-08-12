import React from 'react';

import ResultTableItems from '../result-table-items';

import './result-table.css';

const ResultTable = ( { digitData } ) => {

  const elements = digitData.map((item) => {
    return (
        <ResultTableItems { ...item } key = {item.id}/>
    );
  });
  
  return(
    <div className = "result-table">
      <table  className = 'table table-bordered'>
        <thead>
        <tr>
          <th>#</th>
          <th>Your digit</th>
          <th>Bulls and Cows</th>
        </tr>
        </thead>
        <tbody>
        { elements }
        </tbody>
      </table>
    </div>
  )
};

export default ResultTable;