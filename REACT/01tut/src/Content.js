import React from 'react'
const HandleNameChange = () => {
  const names = ['a','2','c'];
  const int = Math.floor(Math.random() * 3);
  return names[int];
}

const handleClick = () => {
  console.log('you clicked it.');
}
const handleClick2 = (name) => {
  console.log(`${name} was clicked.`);
}
const handleClick3 = (e) => {
  console.log(e.target.innerText);
}

const Content = () => {
  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {HandleNameChange()}!
      </p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={() => {handleClick2('Adnan')}}>Click it 2</button>
      <button onClick={(e) => {handleClick3(e)}}>Click it 3</button>
    </main>
  )
}

export default Content