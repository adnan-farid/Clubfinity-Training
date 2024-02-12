import React from 'react'
const HandleNameChange = () => {
  const names = ['a','2','c'];
  const int = Math.floor(Math.random() * 3);
  return names[int];
}

const Content = () => {
  return (
    <main>
      <p>
        Hello {HandleNameChange()}!
      </p>
    </main>
  )
}

export default Content