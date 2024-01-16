import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "../redux/features/counter/counterSlice";
import { useState } from "react";
const Home = () => {
  const [value, setValue] = useState(null);
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Result is = {count.counter.count}</h1>
      <button
        className="mr-10 bg-green-200 p-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>{" "}
      <br />
      <button
        className="mr-10 bg-red-200 p-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>{" "}
      <br />
      <input
        type="text"
        placeholder="Enter your number"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="mr-10 bg-green-200 p-2"
        onClick={() => dispatch(incrementByValue(parseInt(value)))}
      >
        Increment
      </button>{" "}
      <br />
    </>
  );
};

export default Home;
