import React from 'react';
import { useState } from 'react';

const Content = () => 
{
    const [name, setName] = useState('Bartek');
    const [count, setCount] = useState(0);

    const handleNameChange = ()=> 
    {
      const names = ['Bob','Kevin','Bartek'];
      const int = Math.floor(Math.random() *3);
      setName( names [int]);
    }

    const handleClick = () =>{
        setCount(count+1)
        console.log(count)
    }
    const handleClick2 = () =>{
        console.log(count)
    }
    const handleClick3 = (e) =>{
        console.log(e.target.innerText)
    }

  return (

    
    <main>

        <p onDoubleClick={handleClick}>
          Hello {name} !
        </p>
        <button onClick={handleNameChange}>Zmień imię</button>
        <button onClick={handleClick}>Click It</button>
        <button onClick={handleClick2}>Click It</button>

    </main>
  );
}

export default Content;
