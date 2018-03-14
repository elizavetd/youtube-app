import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Video.css'

class Video extends Component {
  render () {
    const { match } = this.props
    return (
      <div className='video-container'>
        <iframe
          title='player'
          type='text/html'
          width='960'
          height='540'
          src={`http://www.youtube.com/embed/${match.params.videoId}?autoplay=1`}
          frameBorder='0'
          allowFullScreen
        />
      </div>
    )
  }
}

export default withRouter(Video)
