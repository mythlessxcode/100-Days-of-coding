import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function Counter() {
  const[count, setCount] = useState(0);

  function increasing(){
    setCount(count+1);
   }

   function Decreasing(){
    setCount(count-1);
   }

   function SetZero(){
    setCount(0);
   }
   return (
    <>
    <div>
      <h1>Myth is back</h1>
    </div>

    <div id='box' >
        <div>
          <button className='button' onClick={increasing}> <b> Increasing Counter</b> </button>
          
          </div>

          <div>
          <button className='button' onClick={Decreasing}> <b> Decreasing Counter </b> </button>
          <h1>{count}</h1>
          </div>

          <div>
          <button className='button' onClick={SetZero}> <b> Set 0 </b> </button>
        
          </div>
    </div>
     
    </>
  )
}

export default Counter;
