import { useState, useEffect } from 'react';
import './App.css';

// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lastname}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   );
// };

const App = () => {
  // const name = 'Ishika';
  // const isNameShowing = false;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert('Reload');
  });
  return (
    <div className="App">
      {/* <h1>Hello, {isNameShowing ? name : 'someone'}!</h1>
      <p>hello {2 + 2}!</p>
      {name ? (
        <h1> {name}</h1>
      ) : (
        <>
          <h1>Test</h1> <h2>hi guys!</h2>
        </>
      )}

      <Person name="Ishika" lastname="Batra" age={22} />
      <Person name="Durgesh" lastname="Batra" age={22} /> */}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
