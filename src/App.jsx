import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [textdata, settextdata] = useState('');
  const [savedvalue, setSavedvalue] = useState('');

  const inputelement = useRef();

  useEffect(() => {
    // Load saved data from localStorage on initial render
    const storedValue = localStorage.getItem('textdata');
    if (storedValue) {
      settextdata(storedValue);
      setSavedvalue(storedValue);
    }
  }, []);

  const handleClick = () => {
    // Save data to localStorage and update state
    localStorage.setItem('textdata', textdata);
    setSavedvalue(textdata);
    console.log(textdata);
  };
// useEffect(() => {
    //   const savedname = localStorage.getItem("textdata")
    //   if (savedname) {
    //     settextdata(savedname)
    //   }
  
  
    // }, [])
  
    // useEffect(() => {
  
    //   const savedname = localStorage.setItem("textdata", textdata)
  
    // }, [textdata])
  return (
    <>
      <div className='container'>
        <input
          type='text'
          value={textdata}
          onChange={(e) => settextdata(e.target.value)}
          placeholder='Enter your name'
          ref={inputelement}
        />
        <button onClick={handleClick}>Save Name</button>
        <p>Hello, {savedvalue}</p>
      </div>
    </>
  );
}

export default App;
