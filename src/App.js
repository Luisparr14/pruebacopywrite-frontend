
import './App.css';
import NavBar from './components/NavBar';
import WordList from './components/WordList';

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    e.target.search.value = '';
  }

  return (
    <div className="App">
      <NavBar onSubmit={handleSubmit} />
      <WordList />
    </div>
  );
}

export default App;
