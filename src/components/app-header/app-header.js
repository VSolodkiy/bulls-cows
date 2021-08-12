import React from 'react';
import { useMediaQuery } from 'react-responsive';

import './app-header.css';
import icon from './cow-vector.png';

const AppHeader = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' });

  const headerContent = isTabletOrMobile ? <TabletOrMobile /> : <DesktopOrLaptop />;

  return(
    <div id = "" className = "app-header jumbotron rounded">
      { headerContent }
    </div>
  )
};

export default AppHeader;

// Для мобильных телефонов и планшетов
const TabletOrMobile = () => {
  const centerItems = {
      textAlign: "center",
      fontSize: "16px"
  };
  const fontSise = {fontSize: "14px"};

 return(
   <React.Fragment>
    <div style = { centerItems }>
      <h4>Bulls and Cows</h4>
      <h5>Game rules</h5>
      <span style = { fontSise }>I've got a 4-digit secret number. The digits must be all different. You should 
      try to guess this number. If the matching digits are in their right positions, they 
      are "bulls", if in different positions, they are "cows".</span>
      <h6>Example:</h6>
      <p><b>Secret number:</b> 4271</p>
      <p><b>Your try:</b> 1234</p>
      <p style = { fontSise }><b>Answer:</b> 1 bull and 2 cows. (The bull is "2", the cows are "4" and "1".)</p> 
    </div>
   </React.Fragment>
 )
};
// Для больших экранов (компьютеры и др.)
const DesktopOrLaptop = () => {
  return(
    <React.Fragment>
    <img className="app-image" src={ icon } alt="bulls-and-cows" />
      <div>
      <h4>Bulls and Cows</h4>
      <h5>Game rules</h5>
      <span>I've got a 4-digit secret number. The digits must be all different. You should 
        try to guess this number. If the matching digits are in their right positions, they 
        are "bulls", if in different positions, they are "cows".</span>
      <h6>Example:</h6>
      <p><b>Secret number:</b> 4271</p>
      <p><b>Your try:</b> 1234</p>
      <p><b>Answer:</b> 1 bull and 2 cows. (The bull is "2", the cows are "4" and "1".)</p> 
    </div>
    </React.Fragment>
  )
};