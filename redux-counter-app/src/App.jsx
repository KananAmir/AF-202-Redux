import "./App.css";
import Counter from "./components/counter";
import Decrement from "./components/decrement";
import Increment from "./components/increment";
import IncrementByInputValue from "./components/input";
import ResetBtn from "./components/resetCount";
function App() {
  return (
    <div className="App">
      <IncrementByInputValue />
      <ResetBtn />
      <Increment />
      <Decrement />
      <Counter />
    </div>
  );
}

export default App;
