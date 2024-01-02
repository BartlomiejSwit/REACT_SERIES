import React from 'react';

const Content = () => 
{
    const handleNameChange = ()=> 
    {
      const names = ['Bob','Kevin','Bartek'];
      const int = Math.floor(Math.random() *3);
      return names [int];
    }

    const handleClick = () =>{
        console.log('Ty fujaro popsułeś mi apke')
    }
    const handleClick2 = (name) =>{
        console.log(`${name} was clicked`)
    }
    const handleClick3 = (e) =>{
        console.log(e)
    }

  return (

    
    <main>

        <p>
          Hellow {handleNameChange()} !
        </p>
        <button onClick={handleClick}>Click It</button>
        <button onClick={() => handleClick2('Bartek')}>Click It</button>
        <button onClick={(e) => handleClick3(e)}>Click It</button>

    </main>
  );
}

export default Content;
