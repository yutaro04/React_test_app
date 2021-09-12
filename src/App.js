import React, { useState, useEffect } from 'react';
import Moveable from 'react-moveable';
import './App.css';

const App = () => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setTarget(document.querySelector('.mix'));
  }, []);

  return (
    <React.Fragment>
      <div className={'moveable mix'}>mix</div>
      <Moveable
        target={target}
        draggable={true}
        scalable={true}
        rotatable={true}
        origin={false}
        throttleRotate={0}
        onDrag={e => {
          e.target.style.transform = e.transform;
        }}
        onScale={e => {
          e.target.style.transform = e.transform;
        }}
        onRotate={e => {
          e.target.style.transform = e.transform;
        }}
      />
    </React.Fragment>
  );
};

export default App;