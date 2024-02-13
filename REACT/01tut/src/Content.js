import React from 'react';
import { useState } from 'react';



const Content = () => {
  const [name, setName] = useState('Adnan');
  const [count, setCount] = useState(0);

  const HandleNameChange = () => {
    const names = ['a','2','c'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }
  
  const handleClick = () => {
    //logs count value brought into function, use setter functions
    setCount(count+1)
    console.log(count);
  }
  const handleClick2 = () => {
    console.log(count);
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {name}!
      </p>
      <button onClick={HandleNameChange}>Change name</button>
      <button onClick={handleClick}>Click it 2</button>
      <button onClick={handleClick2}>Click it 3</button>
    </main>
  )
}

export default Content