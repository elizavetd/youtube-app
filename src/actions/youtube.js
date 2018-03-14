import { API_KEY, buildApiRequest } from '../libs/apiHelpers'

export const SEARCH_VIDEOS = 'SEARCH_VIDEOS'
export const LOAD_NEXT_SEARCH_RESULT_PAGE = 'LOAD_NEXT_SEARCH_RESULT_PAGE'

export const searchVideos = searchQuery => dispatch => {
  return buildApiRequest(
    'GET',
    '/youtube/v3/search',
    {
      'maxResults': '25',
      'part': 'snippet',
      'q': searchQuery,
      'type': 'video',
      'key': API_KEY
    }
  ).then(searchResult =>
    dispatch({
      type: SEARCH_VIDEOS,
      payload: {
        searchResult: searchResult
      }
    })
  )
}

export const loadNextSearchResultPage = (searchQuery, pageId) => dispatch => {
  return buildApiRequest(
    'GET',
    '/youtube/v3/search',
    {
      'maxResults': '25',
      'pageToken': pageId,
      'part': 'snippet',
      'q': searchQuery,
      'type': 'video',
      'key': API_KEY
    }
  ).then(searchResult =>
    dispatch({
      type: LOAD_NEXT_SEARCH_RESULT_PAGE,
      payload: {
        searchResult: searchResult
      }
    })
  )
}
