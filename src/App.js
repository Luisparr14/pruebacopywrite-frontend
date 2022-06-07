
import './App.css';
import NavBar from './components/NavBar';
import WordList from './components/WordList';
import { useState } from 'react';

function App() {

  const [words, setWords] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const word = e.target.search.value;
      const response = await fetch(`https://backend-app-cw.herokuapp.com/iecho?text=${word}`)
      const data = await response.json()
      if (data.error) return alert(data.error)
      const {text} = data;
      setWords([...words, text]);
      e.target.search.value = '';
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <NavBar onSubmit={handleSubmit} />
      <WordList words={words} />
    </div>
  );
}

export default App;
