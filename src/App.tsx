import * as React from 'react';
import './App.css';

type ActionType = {
  type: 'reset' | 'INCREMENT' | 'DECREMENT';
};

interface Count {
  count: number;
}

interface AppProps {}

const initialState = { count: 0 };

function reducer(state: Count, action: ActionType): Count {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };

    default:
      return state;
  }
}

export const App: React.FC<AppProps> = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleIncrement = (): void => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = (): void => {
    dispatch({ type: 'DECREMENT' });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>useReducer Example</h2>
        <h3>Count: {state.count}</h3>
        <button className="btn-style" onClick={handleIncrement}>
          Increment +
        </button>
        <button className="btn-style" onClick={handleDecrement}>
          Decrement -
        </button>
      </header>
    </div>
  );
};
