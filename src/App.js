import './App.css';

const App = () => {
  const name = 'Ishika';
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : 'someone'}!</h1>
    </div>
  );
};

export default App;
