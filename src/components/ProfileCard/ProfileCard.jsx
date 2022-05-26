// import Link from 'react-router-dom'
import React from 'react'
import './ProfileCard.css'

const ProfileCard = (props) => {
  return (
    <div className='ProfileCard'>My Profile
      <div className="ProfileImages">
        <img src={process.env.PUBLIC_URL + '/images/blank-profile-picture'} />
      </div>
      {/* <div className="ProfileName">
        <p>${this.user.username}</p>
      </div> */}
      {/* <Link to='/posts'>TimeLine</Link>
      <Link to='/my-posts'>My Feed</Link> */}
    </div>
  )
}

export default ProfileCard
