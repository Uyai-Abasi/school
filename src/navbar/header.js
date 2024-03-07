import React from 'react'
import health from '../image/healthcare 1 (1).png'
import logo from '../image/5437683 1.png'

export default function Header() {
  return (
          <div  style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
       <div  >
        <h1 style={{lineHeight:"50px"}}>Start learning with us now</h1>
        <p style={{color:"#000230",width:"500px"}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam  voluptates sed beatae?
</p>
<button style={{width:"200px",height:"44px",backgroundColor:"#682C0E"}}>Start learning</button>

       </div>
            <img src={logo} alt =''/>
    </div>
  )
}
