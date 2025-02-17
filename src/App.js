import "./App.css";
import Component1 from './Components/Component1'
import Component2 from './Components/Component2'
import Parent from './Components/Parent'
import {useState} from 'react'


function App() {
  let count = 0;
  const giveAlert = () =>{
    alert("you just clicked alert")
  }
  const incCounter = () => {
    count = count + 1;
    console.log(count);
  }
  //using useState
  const [count1, incCounter1] = useState(0);

  const handelCounter1 = () => {
    incCounter1(count1 +1);
  };
  const [color , setColor] = useState('black')
  const handleColor = () => {
    setColor('changed');
  }
  // let heading = "My Heading";
  // let par = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, beatae?";
  return (
    <>
    <Parent/>

    
    <button onClick={giveAlert}>Click me </button>

    <h1>Counter</h1>
    <p>{count}</p>
    <button onClick={incCounter}>click for counter</button>


    {/* state changing using useState */}
    <h2 className={color}>Counter 2</h2>
    <button onClick={handelCounter1}>click me using useState</button>
    <button onMouseEnter={handleColor}>counter 2 color change</button>
    <p>{count1}</p>


    </>
  );
}

export default App;
