import {
  SEARCH_VIDEOS
} from '../actions/youtube'

const initialState = {
  searchResult: {}
}

export default function youtubeState (state = initialState, action) {
  switch (action.type) {
    case SEARCH_VIDEOS:
      return {
        ...state,
        searchResult: action.payload.searchResult
      }

    default:
      return state
  }
}
