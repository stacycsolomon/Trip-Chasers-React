/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import CreatePost from './components/posts/CreatePost'
import IndexPost from './components/posts/IndexPost'
import Home from './home/home'
import UpdatePost from './components/posts/UpdatePost'
import ShowPost from './components/posts/ShowPost'
import MyPosts from './components/posts/MyPosts'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: [],
      posts: []
    }
  }

	setUser = (user) => this.setState({ user })

	clearUser = () => this.setState({ user: null })

	deleteAlert = (id) => {
	  this.setState((state) => {
	    return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
	  })
	}

	msgAlert = ({ heading, message, variant }) => {
	  const id = uuid()
	  this.setState((state) => {
	    return {
	      msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
	    }
	  })
	}

  newAddPost = (post) => {
    const currentPosts = this.state.posts
    currentPosts.push(post)
    // currentPosts.unshift(post) // unshift adds the new element to the beginning of the array
    return (this.setState({ posts: currentPosts }))
  }

  setPosts = (posts) => {
    return this.setState({ posts: posts })
  }

  clearPosts = () => {
    return this.setState({ posts: [] })
  }

  render () {
	  const { msgAlerts, user, posts } = this.state

	  return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className='container'>
          <Route
            path='/sign-up'
            render={() => (
              <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
            )}
          />
          <Route
            path='/sign-in'
            render={() => (
              <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/home'
            render={() => (
              <Home
                newAddPost={this.newAddPost}
                posts={posts}
                setPosts={this.setPosts}
                clearPosts={this.clearPosts}
                msgAlert={this.msgAlert}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/sign-out'
            render={() => (
              <SignOut
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/change-password'
            render={() => (
              <ChangePassword msgAlert={this.msgAlert} user={user} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/create-post'
            render={() => (
              <CreatePost
                newAddPost={this.newAddPost}
                posts={posts}
                setPosts={this.setPosts}
                clearPosts={this.clearPosts}
                msgAlert={this.msgAlert}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            exact
            path='/posts'
            render={() => (
              <IndexPost
                posts={posts}
                setPosts={this.setPosts}
                clearPosts={this.clearPosts}
                msgAlert={this.msgAlert}
                user={user}
              />
            )}
          />
          {/* <AuthenticatedRoute
            user={user}
            exact
            path='/posts'
            render={() => <IndexPost msgAlert={this.msgAlert} user={user} />}
          /> */}
          <AuthenticatedRoute
            user={user}
            path='/posts/:id/edit'
            render={() => <UpdatePost msgAlert={this.msgAlert} user={user} />}
          />
          <AuthenticatedRoute
            user={user}
            exact
            path='/posts/:id'
            render={() => <ShowPost msgAlert={this.msgAlert} user={user} />}
          />
          <AuthenticatedRoute
            user={user}
            exact
            path='/myposts'
            render={() => <MyPosts msgAlert={this.msgAlert} user={user} />}
          />
          {/* <Home /> */}
        </main>
      </Fragment>
    )
  }
}

export default App
