import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { deletePost, showPost } from '../../api/post'
import Button from 'react-bootstrap/Button'

class ShowPost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showPost(match.params.id, user)
      .then((res) => this.setState({ post: res.data.post }))
      .then(() => {
        msgAlert({
          heading: 'Show post is success!',
          message: 'Showing post successfully',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Failure to show post!',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = () => {
    const { match, user, msgAlert, history } = this.props

    deletePost(match.params.id, user)
      .then(() => history.push('/home'))
      .then(() => {
        msgAlert({
          heading: 'Deleted post successfully',
          message: 'Post deleted',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Failed to delete post!',
          message: 'Delete error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    if (this.state.post === null) {
      return 'Loading...'
    }

    const { description, img, owner } = this.state.post
    const { user, history, match } = this.props
    return (
      <div>
        <h4>My Posts</h4>
        <p>{description}</p>
        <p>{img}</p>

        {user._id === owner._id && (
          <>
            <Button onClick={this.handleDelete}>Delete Post
            </Button>
            <Button onClick={() => history.push(`/posts/${match.params.id}/edit`)}>Update Post</Button>
          </>
        )}
      </div>
    )
  }
}

export default withRouter(ShowPost)
