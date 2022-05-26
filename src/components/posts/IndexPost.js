/* eslint-disable no-lone-blocks */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useRef } from 'react'
import { indexPosts } from '../../api/post'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './posts.css'

function IndexPost (props) {
  // const [posts, setPosts] = useState([])
  const { user, msgAlert, posts, setPosts } = props
  const componentMounted = useRef(false)
  useEffect(() => {
    if (componentMounted.current === false) {
      indexPosts(user)
        .then((res) => setPosts(res.data.posts))
        .then(() => {
          msgAlert({
            heading: 'Index Posts success',
            message: 'Posts successfully shown!',
            variant: 'success'
          })
        })
        .then(() => {
          componentMounted.current = true
        })
        .catch((error) => {
          msgAlert({
            heading: 'Indexing Posts failed',
            message: 'Index error: ' + error.message,
            variant: 'danger'
          })
        })
    }
  }, [])

  let postJSX
  { posts
    ? (postJSX = posts.map((post) => (
      <div className='posts' key={post._id}>
        <div className='profilePicture'>
          <img src={process.env.PUBLIC_URL + '/images/blank-profile-picture'} />
        </div>
        <p>{post.description}</p>
        <img src={post.img} style={{ maxWidth: '75%', maxHeight: '75%', objectFit: 'cover' }}/>
        <>
          <Link to={`/posts/${post._id}`}><Button>Go to Post</Button></Link>
        </>
      </div>
		  )))
    : (postJSX = 'No posts, create some') }

  return (
    <>
      <h3>All posts:</h3>
      <div>
        <ul style={{ display: 'flex', flexDirection: 'column-reverse' }}>{postJSX}</ul>
      </div>
    </>
  )
}

export default IndexPost
