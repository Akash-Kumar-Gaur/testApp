import React from 'react';
import MyHeader from '../../components/CommonHeader';
import MyBanner from '../../components/MyBanner'

import './index.css';

function HomePage(){
  return (
    <div>
      <MyHeader />
      <MyBanner />
    </div>
  )
}

export default HomePage;