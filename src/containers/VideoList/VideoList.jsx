import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import VideoList from '../../components/VideoList/VideoList'
import * as youtubeActions from '../../actions/youtube'

export class VideoListContainer extends Component {
  render () {
    return (
      <VideoList
        youtube={this.props.youtube}
        youtubeActions={this.props.youtubeActions}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    youtube: state.youtube
  }
}

function mapDispatchToProps (dispatch) {
  return {
    youtubeActions: bindActionCreators(youtubeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer)
