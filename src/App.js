import './App.css';

function App() {
  const name = 'Ana';
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url =
    'https://i.pinimg.com/736x/7e/fd/b9/7efdb9a91e301381f2d8f6ec83201f94.jpg';

  return (
    <div className="App">
      <h2>oi turu boum?</h2>
      <p>oi, {newName}</p>
      <p>soma: {sum(2, 3)}</p>
      <img src={url} alt="gatinho fofo" />
    </div>
  );
}

export default App;
