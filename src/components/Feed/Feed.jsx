import React from 'react'
import CreatePost from '../posts/CreatePost'
import IndexPost from '../posts/IndexPost'
import './Feed.css'

const Feed = (props) => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <CreatePost {...props}/>
      </div>
      <IndexPost {...props} />

    </div>
  )
}

export default Feed
