import React, { Component } from 'react'
import moment from 'moment'
import { Link, withRouter } from 'react-router-dom'

import './VideoList.css'

class VideoList extends Component {
  render () {
    return (
      <div className='video-list'>
        {this.props.youtube.searchResult.items &&
          this.props.youtube.searchResult.items.map((video, index) => (
            <Link
              to={`/video/${video.id.videoId}`}
              key={index}
              className='video-list-item__container'
            >
              <div className='video-list-item'>
                <div className='video-list-item__thumbnail'>
                  <img src={video.snippet.thumbnails.medium.url} alt='' />
                </div>

                <div className='video-list-item__info'>
                  <h3 className='video-list-item__title'>{video.snippet.title}</h3>
                  <h5 className='video-list-item__channel'>{video.snippet.channelTitle}</h5>
                  <p className='video-list-item__date'>
                    {moment(video.snippet.publishedAt).format('DD.MM.YYYY HH:mm:ss')}
                  </p>
                  <p className='video-list-item__description'>{video.snippet.description}</p>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    )
  }
}

export default withRouter(VideoList)
