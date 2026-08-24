import { useState, useEffect } from "react";
import './App.css'

export default function App() {
  const [fact, setFact] = useState("Loading fact...");

  useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
      .then((res) => res.json())
      .then((data) => {
        setFact(data.text);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
      <Card fact={fact} />
    </div>
  );
}

function Card({ fact }) {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, white, oklch(65.6% 0.241 354.308))",
        borderRadius: 10,
        color: 'black',
        padding: 10,
        margin: 10,
        height: 800,
        width: 550,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
<div style={{ width: 360,
          height: 360,
           background:'oklch(64.5% 0.246 16.439)', 
           borderRadius:'50%', 
           display:"flex", 
           justifyContent:'center', 
           alignItems:'center',
           
           }}>

      <div
        style={{
          background: 'oklch(64.5% 0.246 16.439)',
          
          width: 350,
          height: 350,
          borderRadius: "50%",
          overflow: 'hidden',
          // boxShadow: '0px 4px 10px rgba(0,0,0,0.3)'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1772107756927-a3975482b1ef?w=700&auto=format&fit=crop&q=60"
          alt="profile"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
</div>

      <h1 style={{ fontSize: 70, fontFamily:'ui-sans-serif' }}>Mythless</h1>
      <p style={{ fontSize: 35 }}>Frontend Engineer</p>
      <p style={{ fontSize: 25 ,fontFamily:'ui-sans-serif', padding:10}}>"{fact}"</p>
      <div style={{display:'flex', gap:20}}>
        <a href="https://www.linkedin.com/in/mithalesh-aditya-41aa981b4/" >
        <img src="https://cdn-icons-png.flaticon.com/512/4401/4401412.png" alt=""  style={{width:50, height:50}}/>
          </a>
          <a href="https://github.com/myth3107">
               <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"  alt="" style={{width:50, height:50}}/>
          </a>
        
        
      </div>
      
    </div>
  );
} 