import React from 'react';
import Decrement from './Decrement';
import Increment from './Increment';

function Home(store){
  return (
    <div>
      <h3>{store.counter}</h3>
      <Decrement/>
      <Increment/>
    </div>
  );
};

export default Home;
