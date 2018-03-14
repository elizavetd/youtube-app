import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Video.css'

class Video extends Component {
  render () {
    const { match } = this.props
    return (
      <div className='video-container'>
        <div className='video__wrapper'>
          <iframe
            className='video'
            title='player'
            type='text/html'
            src={`https://www.youtube.com/embed/${match.params.videoId}?autoplay=1`}
            frameBorder='0'
            allowFullScreen
          />
        </div>
      </div>
    )
  }
}

export default withRouter(Video)
