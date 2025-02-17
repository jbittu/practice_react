import "./App.css";
import Component1 from './Components/Component1'
import Component2 from './Components/Component2'
import Parent from './Components/Parent'


function App() {
  let count = 0;
  const giveAlert = () =>{
    alert("you just clicked alert")
  }
  const incCounter = () => {
    count = count + 1;
    console.log(count);
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
    </>
  );
}

export default App;
