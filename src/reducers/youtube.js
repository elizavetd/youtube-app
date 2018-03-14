import {
  SEARCH_VIDEOS,
  LOAD_NEXT_SEARCH_RESULT_PAGE
} from '../actions/youtube'

const initialState = {
  currentSearchQuery: '',
  searchResult: {}
}

export default function youtubeState (state = initialState, action) {
  switch (action.type) {
    case SEARCH_VIDEOS:
      return {
        ...state,
        currentSearchQuery: action.payload.currentSearchQuery,
        searchResult: action.payload.searchResult
      }

    case LOAD_NEXT_SEARCH_RESULT_PAGE:
      return {
        ...state,
        searchResult: {
          ...action.payload.searchResult,
          items: [
            ...state.searchResult.items,
            ...action.payload.searchResult.items
          ]
        }
      }

    default:
      return state
  }
}
