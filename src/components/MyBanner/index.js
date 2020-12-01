import React from "react";

import "./index.css";

function MyBanner({
  list = [1,2,3,4,5,6]
}) {
  return (
    <ol>
      {
        list.map(element => {
          return <li>{element}</li>
        })
      }
    </ol>
  )
}

export default MyBanner;