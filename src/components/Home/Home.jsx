import React from 'react'
import ProfileSide from '../ProfileSide/ProfileSide'
import RightSide from '../RightSide/RightSide'
import Main from '../Main/Main'

const Home = (props) => {
  return (
    <div className="home">
      <ProfileSide/>
      <Main {...props}/>
      <RightSide/>
    </div>
  )
}

export default Home
