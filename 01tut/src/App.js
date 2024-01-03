import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() 
{
  const [items, setitems] = useState([
    {
      id: 1,
      checked: true,
      item: "Jakiś przedmiot nr 1"
    },
    {
      id: 2,
      checked: false,
      item: "Jakiś przedmiot nr 2"
    },
    {
      id: 3,
      checked: false,
      item: "Jakiś przedmiot nr 3"
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, 
      checked: !item.checked } : item);
      setitems(listItems);
      localStorage.setItem('shopinglist' ,JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !==id);
    setitems(listItems);
    localStorage.setItem('shopinglist' ,JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header title='Grocery List' />
      <Content 
        items={items}  
        handleCheck={handleCheck}
        handleDelete={handleDelete}   
      />
      <Footer length={items.length} />

    </div>
  );
}

export default App;
