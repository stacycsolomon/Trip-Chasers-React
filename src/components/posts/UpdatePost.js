import React, { Component } from 'react'
import { showPost, updatePost } from '../../api/post'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { withRouter } from 'react-router-dom'

class UpdatePost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      description: '',
      img: '',
      likes: 0
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showPost(match.params.id, user)
      .then((res) =>
        this.setState({
          description: res.data.post.description,
          img: res.data.post.img
        })
      )

      .then(() => {
        msgAlert({
          heading: 'Show post success',
          message: 'Woot success',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Show failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

    handleChange = (event) =>
      this.setState({
        [event.target.name]: event.target.value
      })

      handleSubmit = event => {
        event.preventDefault()

        const { user, msgAlert, history, match } = this.props

        updatePost(this.state, match.params.id, user)
          .then(() => history.push('/posts/' + match.params.id))
          .then(() => {
            msgAlert({
              heading: 'Updated Post',
              message: 'woot updated',
              variant: 'success'
            })
          })
          .catch(error => {
            msgAlert({
              heading: 'Update failed',
              message: 'Update error: ' + error.message,
              variant: 'danger'
            })
          })
      }

      render () {
        return (
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
            <Button type='submit'>Submit</Button>
          </Form>
        )
      }
}

export default withRouter(UpdatePost)
