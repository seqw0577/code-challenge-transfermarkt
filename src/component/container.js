import React from 'react';

function Container(props) {
  let {style=null,children} = props;
  return <div className="container" style={style}>
      {children}
  </div>
}

export default Container;