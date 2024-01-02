import React from 'react';

const Content = () => 
{
    const handleNameChange = ()=> 
    {
      const names = ['Bob','Kevin','Bartek'];
      const int = Math.floor(Math.random() *3);
      return names [int];
    }

  return (

    
    <main>

        <p>
          Hellow {handleNameChange()} !
        </p>

    </main>
  );
}

export default Content;
