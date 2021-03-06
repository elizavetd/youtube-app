import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from '../../components/App/App'
import * as youtubeActions from '../../actions/youtube'

export class AppContainer extends Component {
  render () {
    return (
      <App
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
