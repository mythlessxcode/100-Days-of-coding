import { useState } from 'react'
import{BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import './App.css'

function App() {


  return (
    <>
   
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/neet/online-coaching-class-11' element={<Class11Program/>} ></Route>
       <Route path='/neet/online-coaching-class-12' element={<Class12Program/>} ></Route>
       <Route path='/' element={<Landing/>} ></Route>
       <Route path='*' element={<ErrorPage/>} ></Route>
      </Route>
     
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

function Layout(){
  return(
    <div style={{height:"100vh"}}>
      <Header></Header>

      <div style={{height:'90vh', background:'oklch(60.6% 0.25 292.717)'}}>
        <Outlet/>
      </div>
          footer
    </div>
  )
}

function Header(){
  return <div>
     <h1>
    <Link to={'/'} >Akash   </Link> 
    | 
   <Link to={'/neet/online-coaching-class-11'} > Class-11 </Link> 
    | 
    <Link to={'/neet/online-coaching-class-12'}>Class-12</Link> 
   </h1>
  </div>
}
 
function ErrorPage(){
  return <div>
   <h1>  SORRY PAGE IS NOT FOUND</h1>
  </div>
}

function Landing(){
  return <div>
    <h1>Welcome to Akash couching center</h1>
  </div>
}


function Class11Program(){
  return <div>
    <h1>
 Welcome to class 11th Programm
    </h1>
   
  </div>
}

function Class12Program(){
  return <div>
    <h1>
      Welcome to class 12th Programm
    </h1>
    
  </div>
}

export default App
