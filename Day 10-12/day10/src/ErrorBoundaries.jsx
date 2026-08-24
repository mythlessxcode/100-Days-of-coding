import React from "react"
export default function App(){
    return(
        <div style={{display:'flex', justifyContent:'center', gap:30}}>
            <ErrorBoundary>
                <Card1/>
            </ErrorBoundary>
           
           <Card2/>
        </div>
    );
}

function Card1(){
     throw new Error('Error while rendering');
    return(
       
        <div style={{background:'oklch(70.2% 0.183 293.541)', borderRadius:10, width:200, height:300, display:'flex', justifyContent:'center', alignItems:'center'}}>
             hii myth
        </div>    
        )
}


function Card2(){
    return(
        <div style={{background:'oklch(70.2% 0.183 293.541)', borderRadius:10, width:200, height:300, display:'flex', justifyContent:'center', alignItems:'center'}}>
             hii Prag
        </div>
    )
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return ( 
 <div  style={{background:'red', borderRadius:10, width:200, height:300, display:'flex', justifyContent:'center', alignItems:'center'}}>
    Something Went wrong
 </div>
            )
           
            
        }
        return this.props.children; 
    }
}