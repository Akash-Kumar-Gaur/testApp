import React, { useState } from 'react';
import MyHeader from '../../components/CommonHeader';
import MyBanner from '../../components/MyBanner'

import './index.css';

function HomePage() {

  const [listItems, setListItems] = useState([]);
  let myList = [];

  return (
    <div>
      <input onChange={(e) => myList.push(e.target.value)} />
      <button onClick={() => setListItems(myList)}>Check</button>
      <ol>
        {
          listItems.map((ele, key) => {
            return (
              <li key={key}>{ele}</li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default HomePage;

// 1. Component was not rendering