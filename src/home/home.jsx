import React from 'react'
import ProfileSide from '../components/ProfileSide/ProfileSide'
import Feed from '../components/Feed/Feed'
import RightSide from '../components/RightSide/RightSide'
import './home.css'

const Home = (props) => {
  return (
    <div className="Home">
      <ProfileSide/>
      <Feed {...props}/>
      <RightSide/>
    </div>
  )
}

export default Home
