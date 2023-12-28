import React, { useEffect } from 'react'
import { useState } from 'react'
import './Nav.css'

function Nav() {
 
  const[show,setShow] = useState(false)
  useEffect (()=>{
	  window.addEventListener("scroll",()=>{
      if(window.scrollY>600){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })
  console.log(show);

  return (
    <div className={`${show && 'nav-black'} nav`}>
        <img width={'180px'} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix" />
    </div>
  )
}

export default Nav