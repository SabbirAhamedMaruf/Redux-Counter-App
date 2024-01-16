import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "../redux/features/counter/counterSlice";
const Home = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Result is = {count.counter.count}</h1>
      <button className="mr-10 bg-green-200 p-2" onClick={() => dispatch(increment())}>Increment</button>
      <button className="mr-10 bg-red-200 p-2" onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default Home;
