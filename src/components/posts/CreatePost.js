/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { createPost } from '../../api/post'
import { withRouter, Redirect } from 'react-router-dom'

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
	  const { user, msgAlert, history } = this.props

	  createPost(this.state, user)
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
	    <>
	    <Form onSubmit={this.handleSubmit}>
	      <Form.Group controlId='description'>
	        <Form.Label>What&apos;s on your mind today?</Form.Label>
	        <Form.Control
	          required
	          name='description'
	          value={this.state.description}
	          placeholder='Share your thoughts'
	          onChange={this.handleChange}
	        />
	      </Form.Group>
	        <div className='pictures'>
	          <img src={this.state.img} />
	          <p>Add Image</p>
	          <input type='url' name='img' placeholder='share url link to upload images' onChange={this.handleChange} />
	        </div>
	      <Button type='submit'>Submit</Button>
	    </Form>
	    </>
	  )
	}
}

export default withRouter(CreatePost)
