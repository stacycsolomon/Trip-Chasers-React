import React, { Component } from 'react'
import { myPosts } from '../../api/post'
import { Link } from 'react-router-dom'

class MyPosts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    myPosts(user)
      .then((res) => {
        return res.data.posts.filter((post) => post.owner._id === user._id)
      })
      .then((filteredRes) => this.setState({ posts: filteredRes }))
      .then(() => {
        msgAlert({
          heading: 'Showing all your posts!',
          message: 'Success!',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Failure showing your posts',
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
        <h3>My Posts:</h3>
        <ul>{postJSX}</ul>
      </>
    )
  }
}

export default MyPosts
