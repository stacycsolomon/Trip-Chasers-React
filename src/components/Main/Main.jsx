import React from 'react'
import CreatePost from '../posts/CreatePost'
import IndexPost from '../posts/IndexPost'

const Main = (props) => {
  return (
    <div className="main">
      <div className='shareBox'>
        <CreatePost {...props}/>
      </div>
      <IndexPost {...props} />
    </div>
  )
}

export default Main
