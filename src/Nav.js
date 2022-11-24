import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
  const [show, setShow] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        setShow(() => true)
      }else setShow(() => false)
    })
  },[])

  return (
    <div className= {`nav ${show && "nav_black"}`}>
     <img className="nav_logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="img" />
        
     {/* <div className="nav wrapper" >
<a  href="/Home">Home</a>
<a  href="/TvShows">Trending Now</a>
<a  href="/Movies">Top Rated</a>
<a  href="/ActionM">Action Movies</a>
<a  href="/ComedyM">Comedy Movies</a>
<a  href="/HorrorM">Horror Movies</a>
<a  href="/RomanceM">Romance Movies</a>
<a className="margR" href="/DocumentaryM">Documentary Movies</a>
</div> */}



        <img 
        className='nav_avatar'
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png
        "
            alt="Avatar Logo"
            />
    </div>
  )
}

export default Nav