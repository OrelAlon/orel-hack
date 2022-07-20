import React from "react";

import "./compareNav.css";

const CompareNav = () => {
  return (
    <div className='compare-nav' data-testid='compare'>
      <ul className='compare__row'>
        <li className='compare-head'>Product</li>
        <li className='compare-head'>Price</li>
        <li className='compare-head'>Flavor</li>
        <li className='compare-head'>Size</li>
      </ul>
    </div>
  );
};

export default CompareNav;

// .sidenav {
//   height: 35%;
//   width: 100%;
//   position: fixed;
//   z-index: 1;
//   bottom: 0;
//   left: 0;
//   background-color: #111;
//   overflow-x: hidden;
//   transition: 0.5s;
//   padding-top: 60px;
// }
// .sidenav a {
//   padding: 8px 8px 8px 32px;
//   text-decoration: none;
//   font-size: 25px;
//   color: #818181;
//   display: block;
//   transition: 0.3s;
// }

// .sidenav a:hover {
//   color: #f1f1f1;
// }

// .sidenav .closebtn {
//   position: absolute;
//   top: 0;
//   right: 25px;
//   font-size: 36px;
//   margin-left: 50px;
// }
