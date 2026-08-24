import './App.css'


export default function PetAdoption(){
    return(
        <div>
           
            <div className='start-bg'>
                 <div style={{background:"rgba(130, 215, 169, 0.5)", width:'1440px', borderRadius:10,  textAlign:'center',
                 }}>
                    <h1>Pet Adoption</h1>
                </div>

                <div style={{background:"rgba(130, 215, 169, 0.5)", width:'720px', borderRadius:10,height:'100vh', marginBottom:20, display:'flex',flexDirection:'column', alignItems:'center' }}>
                     <div style={{margin:20}}>
                        <h2>
                           Pet Name
                        </h2>
                        <input type="text"  style={{width:"400px", height:'30px' , marginTop:'-20px'}}/>
                     </div>

                     <div style={{margin:20}}>
                        <h2>
                           Pet Type
                        </h2>
                       <label for="pet" style={{width:"400px", height:'30px' , marginTop:'-20px'}}></label >

                           <select name="pet" id="pet" style={{width:"400px", height:'30px' , marginTop:'-20px'}}>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="rabbit">Rabbit</option>
  <option value="bird">Bird</option>
  <option value="fish">Fish</option>
  <option value="hamster" selected>Hamster</option>
</select>
                     </div>

                     <div style={{margin:20}}>
                        <h2>
                           Breed
                        </h2>
                        <input type="text"  style={{width:"400px", height:'30px' , marginTop:'-20px'}}/>
                     </div>

                     <div style={{margin:20}}>
                        <h2>
                           Your Name
                        </h2>
                        <input type="text"  style={{width:"400px", height:'30px' , marginTop:'-20px'}}/>
                     </div>


                     <div style={{margin:20}}>
                        <h2>
                           Mobile Number
                        </h2>
                        <input type="number"  style={{width:"400px", height:'30px' , marginTop:'-20px'}}/>
                     </div>

                     <div style={{margin:20}}>
                        <h2>
                           Email
                        </h2>
                        <input type="email"  style={{width:"400px", height:'30px' , marginTop:'-20px'}}/>
                     </div>
                </div>

               
                
              
               
            
            </div>
           
            
        </div>
    )
}