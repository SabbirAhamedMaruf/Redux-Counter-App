import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/features/counter/counterSlice";
const Home = () => {
  const count = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();
  return (
    <>
      <p>hello</p>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </>
  );
};

export default Home;
