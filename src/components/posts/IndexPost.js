import React, { Component } from 'react'
import { indexPosts } from '../../api/post'
import { Link } from 'react-router-dom'

class IndexPost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexPosts(user)
      .then((res) => this.setState({ posts: res.data.posts }))
      .then(() => {
        msgAlert({
          heading: 'Index Posts success',
          message: 'Posts successfully shown!',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Indexing Posts failed',
          message: 'Index error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { posts } = this.state

    if (posts === null) {
      return 'Loading...'
    }

    let postJSX
    if (posts.length === 0) {
      postJSX = 'No posts, create some'
    } else {
      postJSX = posts.map((post) => (
        <li key={post._id}>
          <Link to={`/posts/${post._id}`}>{post.description}</Link>
        </li>
      ))
    }

    return (
      <>
        <h3>All posts:</h3>
        <ul>{postJSX}</ul>
      </>
    )
  }
}

export default IndexPost
