import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, ot, reset } from './CounterSlice';

const Counter = () => {
  const { counter, msg } = useSelector((s) => s.countStore);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter application</h1>
      <hr />
      <h1>{counter}</h1>
      <h2>{msg}</h2>
      <button onClick={() => dispatch(increment())}>++</button> &nbsp;
      <button onClick={() => dispatch(decrement())}>--</button> &nbsp;
      <button onClick={() => dispatch(reset())}>Reset</button> &nbsp;
      <button onClick={() => dispatch(ot(111))}>Osthir Set</button>
    </>
  );
};

export default Counter;
