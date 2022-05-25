// import Link from 'react-router-dom'
import React from 'react'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>My Profile
      <div className="ProfileImages">
        <img src={process.env.PUBLIC_URL + '/images/blank-profile-picture'} />
      </div>
      {/* <Link to='/posts'>TimeLine</Link>
      <Link to='/my-posts'>My Feed</Link> */}
    </div>
  )
}

export default ProfileCard
