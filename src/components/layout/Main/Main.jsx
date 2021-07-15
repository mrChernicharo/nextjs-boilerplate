import React from 'react';

function Main(props) {
  return (
    <div>
      <h2>Main</h2>
      {props.children}
    </div>
  );
}

export default Main;
