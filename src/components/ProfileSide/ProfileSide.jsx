import { PeopleAlt, Bookmark, Event, HelpOutline, Chat, AccountCircle } from '@material-ui/icons'
import React from 'react'

// import ProfileCard from '../ProfileCard/ProfileCard'

const ProfileSide = () => {
  return (
    <div className='profileSide'>
      <div className='profileWrapper'>
        <ul className='profileList'>
          <li className='profileListItem'>
            <AccountCircle className='profileIcon' />
            <span>My Account</span>
          </li>
          <li className='profileListItem'>
            <PeopleAlt className='profileIcon' />
            <span>Friends</span>
          </li>
          <li className='profileListItem'>
            <Chat className='profileIcon' />
            <span>Chat</span>
          </li>
          <li className='profileListItem'>
            <Event className='profileIcon' />
            <span>Saved Events</span>
          </li>
          <li className='profileListItem'>
            <Bookmark className='profileIcon' />
            <span>Bookmark</span>
          </li>
          <li className='profileListItem'>
            <HelpOutline className='profileIcon' />
            <span>Help</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileSide
