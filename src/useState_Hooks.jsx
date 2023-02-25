import { useState } from "react";

// function countInitial(){
//   console.log("Render");
//   return 0;
// }
const UseState = () => {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('Blue'); //! Use different states to manage different criteria
    // const [count, setCount] = useState(()=>countInitial()); //!Complex kajer jonno ai method use korte hobe
  
    function decrementCount() {
      // setCount(count-1); //!Bad Practice
      setCount((prevCount) => prevCount - 1); //! Always use previous value to update state
      // setCount((prevCount) => prevCount - 1);
    }
  
    function increamentCount() {
      setCount((prevCount) => prevCount + 1);
    }
  
    return (
      <div className="flex justify-center text-9xl">
        <div className="space-x-8 space-y-8">
          <button onClick={decrementCount} className="shadow-lg p-8">
            -
          </button>
          <span className="text-blue-500">{count}</span>
          <span className="text-blue-500">{theme}</span>
          <button onClick={increamentCount} className="shadow-lg p-8">
            +
          </button>
        </div>
      </div>
    );
}
 
export default UseState;