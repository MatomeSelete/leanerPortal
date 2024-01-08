import React from 'react'
import Link from "next/link"


export const getStaticProps = async () => {
    const API_URL = "https://jsonplaceholder.typicode.com/users"
    const request = await fetch(API_URL)
    const leaners = await request.json()
    return  { props : { leaners } }
  }

function leanerlist({ leaners }) {


  return (
    <div>
       
       <main>
        <div style={{border:"2px solid black", backgroundColor:"gray", margin:"5px"}}>
        {leaners.map(leaner => (
          <Link href={`leaners/${leaner.id}`}>
             <div style={{border:"2px solid red", backgroundColor:"gray", margin:"5px"}} key={leaner.id}>
                <h3>{leaner.name}</h3>
             </div>
          </Link>
        ))}   
        </div> 
      </main>
        
    </div>
  )
}

export default leanerlist