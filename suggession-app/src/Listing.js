import React from 'react'
export const Listing = (props) => {
    return (
      <div key={props.k} style={{textAlign:"left",paddingLeft:"40px"}}>
        <p>{props.lists}</p>
      </div>
    );
  };
