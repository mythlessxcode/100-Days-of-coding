import './App.css';
import React from 'react';


export default function PostComponent() {
  return(
    <div className='container' >
      <Profile/>
      <Profile/>
      <Profile/>

    </div>

  )
}
const boxStyle={
  height:"100px", 
  widht:20, 
  backgroundColor:"#3c40c6",
  
  
}

const imgStyle={
  height:100,
  width:100,
  borderRadius:"50%"
  
}



function Profile(){
  return(
    <div>
      <div className='box' style={boxStyle}>
        <img src="https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={imgStyle}/>
        <span className='text'>
          
          <p><b>Mythless kumar aditya</b><br />
          50k followers <br />
          22 years old</p>
          
        
        </span>
        
        
      </div>
    </div>
  )
}

