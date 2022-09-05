/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { createPost } from '../../api/post'
import { withRouter, Redirect } from 'react-router-dom'
import { PermMedia, Room, EmojiEmotions } from '@material-ui/icons'

class CreatePost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      description: '',
      img: '',
      likes: 0
    }
  }

	handleChange = (event) =>
	  this.setState({
	    [event.target.name]: event.target.value
	  })

	handleSubmit = (event) => {
	  event.preventDefault()
	  const { user, msgAlert, history, newAddPost } = this.props // render={() => <CreatePost newAddPost={this.addPost} msgAlert={this.msgAlert} user={user} />}
	  createPost(this.state, user)
	    .then((res) => {
	      newAddPost({
	        _id: res.data.post._id,
	        description: res.data.post.description,
	        img: res.data.post.img
	      })
	    })
	    .then(() => { this.setState({ description: '', img: '' }) })
	    .then(() => history.push('/home'))
	    .then(() => {
	      msgAlert({
	        heading: 'New Post created',
	        message: 'Created successfully!',
	        variant: 'success'
	      })
	    })
	    .catch((error) => {
	      msgAlert({
	        heading: 'Failed to create new post',
	        message: 'Post error: ' + error.message,
	        variant: 'danger'
	      })
	    })
	  if (this.state.description) {
	    return <Redirect to={'/posts'} />
	  }
	}

	render () {
	  return (
	    <Form onSubmit={this.handleSubmit} className='form'>
	      <Form.Group controlId='description'>
	        <div className='shareInput'>
	          <img
	            src={process.env.PUBLIC_URL + '/images/blank-profile-picture'}
	            className='shareProfileImg'
	          />
	          <Form.Control
	            required
	            name='description'
	            value={this.state.description}
	            placeholder="What's on your mind today?"
	            onChange={this.handleChange}
	          />
	        </div>
	      </Form.Group>
	      <hr className='shareHr' />
	      {/* <Form onSubmit={this.handleSubmit}> */}
	      <div className='shareBottom'>
	        <div className='shareOptions'>
	          <PermMedia className='shareIcon' />
	          <span>Upload Image</span>
	          <Room className='shareIcon' />
	          <span>Tag Location</span>
	          <EmojiEmotions className='shareIcon' />
	          <span>Feelings</span>
	        </div>
	        {/* <img src={this.state.img} /> */}
	        {/* <input
	                type='url'
	                name='img'
	                value={this.state.img}
	                placeholder='paste img url link here'
	                onChange={this.handleChange}
	              /> */}
	        <div>
	          <Button
	            style={{ backgroundColor: '#ba6b6c', border: 'none' }}
	            type='submit'
	            className='shareButton'>
							Share
	          </Button>
	        </div>
	      </div>
	      {/* </Form> */}
	    </Form>
	  )
	}
}

export default withRouter(CreatePost)
