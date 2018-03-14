import { API_KEY, buildApiRequest } from '../libs/apiHelpers'

export const SEARCH_VIDEOS = 'SEARCH_VIDEOS'

export const searchVideos = searchQuery => dispatch => {
  return buildApiRequest(
    'GET',
    '/youtube/v3/search',
    {
      'maxResults': '25',
      'part': 'snippet',
      'q': searchQuery,
      'type': '',
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
