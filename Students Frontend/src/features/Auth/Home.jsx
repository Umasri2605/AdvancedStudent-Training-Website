import React from 'react'

function Home() {
  return (
    <div>
        <div style={{display:"flex",alignItems:"center"}}>
          <div style={{fontSize:"1.5em",display:"flex",flexDirection:"column",width:"50%",alignItems:"center",marginTop:"5%"}}>
              <h1><b>Code Your Career</b></h1>
              <h2><b>Prepare Practice Perform</b></h2>
          </div>
          <div>
              <img style={{width:"750px", marginLeft:"10px",marginBottom:"10px",marginTop:"10px"}} src="https://edupoly.in/assets/best-fullstack-training-hyderabad.png"/>
          </div>
          </div>

          <div style={{textAlign:"center",bottom:0,position:"fixed",marginLeft:"80px"}}>
            <h2><b>Get Job Ready by Industry Experts with Industry Standards from scratch</b></h2>
          </div>
    </div>
  )
}
export default Home;