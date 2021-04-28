import React, {useState} from 'react';
import s from './App.module.css';
import { Counter } from './Counter/Counter';




function App() {

    const [count, setCount] = useState<number>(0)
    const incCount = () => setCount(count + 1)
    const resetCount = () => setCount(0)


  return (
    <div className={s.App}>
      <Counter
          count={count}
          incCount = {incCount}
          resetCount={resetCount}
      />

    </div>
  );
}

export default App;
