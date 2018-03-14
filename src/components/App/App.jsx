import React, { Component } from 'react'
import { GAPI_URL, API_KEY } from '../../libs/apiHelpers'
import { Route, withRouter } from 'react-router-dom'

import VideoList from '../../containers/VideoList/VideoList'
import Video from '../Video/Video'

import './App.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      gapiReady: false,
      searchQuery: ''
    }
  }

  loadYoutubeApi () {
    const script = document.createElement('script')
    script.src = GAPI_URL

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY)
        window.gapi.client.load('youtube', 'v3', () => {
          this.setState({ gapiReady: true })
        })
      })
    }

    document.body.appendChild(script)
  }

  handleSearchQueryChange (e) {
    this.setState({
      searchQuery: e.currentTarget.value
    })
  }

  searchVideos () {
    if (this.state.gapiReady) {
      this.props.youtubeActions.searchVideos(this.state.searchQuery)
    }

    if (this.props.history.location.pathname !== '/') {
      this.props.history.push('/')
    }
  }

  handleEnterKeyPress (e) {
    e.preventDefault()

    if (e.keyCode === 13) {
      document.getElementsByClassName('search__button')[0].click()
    }
  }

  componentWillMount () {
    this.loadYoutubeApi()
  }

  componentDidMount () {
    this.searchInput = document.getElementsByClassName('search__input')[0]
    this.searchInput.addEventListener('keyup', this.handleEnterKeyPress)
  }

  componentWillUpdate (nextProps, nextState) {
    if (this.state.gapiReady !== nextState.gapiReady && nextState.searchQuery) {
      this.props.youtubeActions.searchVideos(nextState.searchQuery)
    }
  }

  componentWillUnmount () {
    this.searchInput.removeEventListener('keyup', this.handleEnterKeyPress)
  }

  render () {
    return (
      <div className='app'>
        <header className='app-header'>
          <div className='search__container'>
            <input
              className='search__input'
              placeholder='Search for videos'
              value={this.state.searchQuery}
              onChange={this.handleSearchQueryChange.bind(this)}
            />
            <button
              className='search__button'
              onClick={this.searchVideos.bind(this)}
            >
              Search
            </button>
          </div>
        </header>

        <div className='content'>
          <Route exact path='/' component={VideoList} />
          <Route path='/video/:videoId' component={Video} />
        </div>
      </div>
    )
  }
}

export default withRouter(App)
