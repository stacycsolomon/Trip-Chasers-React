import React from 'react'
import ProfileSide from '../components/ProfileSide/ProfileSide'
import Feed from '../components/Feed/Feed'
import RightSide from '../components/RightSide/RightSide'
import './home.css'

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide/>
      <Feed/>
      <RightSide/>
    </div>
  )
}

export default Home
