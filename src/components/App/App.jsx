import React, { Component } from 'react'
import { GAPI_URL, API_KEY, buildApiRequest } from '../../libs/apiHelpers'

import './App.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      gapiReady: false
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

  componentWillMount () {
    this.loadYoutubeApi()
  }

  render () {
    if (this.state.gapiReady) {
      buildApiRequest(
        'GET',
        '/youtube/v3/search',
        {
          'maxResults': '25',
          'part': 'snippet',
          'q': 'surfing',
          'type': '',
          'key': API_KEY
        }
      )
    }

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
