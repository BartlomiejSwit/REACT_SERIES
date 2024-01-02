/* import logo from './logo.svg'; */
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() 
{
  const handleNameChange = ()=> 
  {
    const names = ['Bob','Kevin','Bartek'];
    const int = Math.floor(Math.random() *3);
    return names [int];
  }

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
{/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hellow {handleNameChange()} !
        </p>
        <p>
          Edit <code>src/App.js</code> and save to kurwa ubera kupa.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
        {"Wyjebane  "}{name}
      </p>
      </header> */}
    </div>
  );
}

export default App;
