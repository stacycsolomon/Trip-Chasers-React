/* eslint-disable no-lone-blocks */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useRef } from 'react'
import { indexPosts } from '../../api/post'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

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
        <div className='postWrapper'>
          <div className='postTop'>
            <img
              src={process.env.PUBLIC_URL + '/images/blank-profile-picture'}
              className='postProfileImg'
              alt=''
            />
            <span className='postUsername'>{post.owner?.username}</span>
          </div>
          <div className='postCenter'>
            <p>{post.description}</p>
            <img src={post.img} className="postImg" />
          </div>
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src='images/like.png' alt ='' />
            <span className='likes'>5 likes</span>
          </div>
          <div className='postBottomRight'>
            <>
              <Link to={`/posts/${post._id}`}>
                <Button className='postButton'
                  style={{ backgroundColor: '#ba6b6c', border: 'none' }} >
										View post
                </Button>
              </Link>
            </>
          </div>
        </div>
      </div>
		  )))
    : (postJSX = 'No posts, create some') }

  return (
    <>
      <div className="all-posts">
        <ul style={{ display: 'flex', flexDirection: 'column-reverse' }}>{postJSX}</ul>
      </div>
    </>
  )
}

export default IndexPost
