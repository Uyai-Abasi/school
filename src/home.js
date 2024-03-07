import React from 'react'
import learn from './image/image 3.png'
import register from './image/register.png'

export default function Home() {
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-around" ,alignItems:"center",marginTop:"100px",gap:"50px"}}>
      <div>

<img src={learn} alt="" />

      </div>
      <div style={{display:"flex",flexDirection:"column"}}> 
        <h1 style={{lineHeight:"50px"}}>
        Welcome to the online centers
        </h1>
        <ul style={{lineHeight:"50px"}}>
        <li>Start learning from your experience</li>
        <li>Enhance your skills with us now</li>
        <li>Do your favorite course</li>
        </ul>
      </div>
      </div>
    </>
  )
}
