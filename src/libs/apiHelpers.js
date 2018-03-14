export const GAPI_URL = 'https://apis.google.com/js/client.js'
export const API_KEY = 'AIzaSyDxepLxLVZQ7WAI9j29oQJYgUYgPw1ds6M'

export function buildApiRequest (requestMethod, path, params, properties) {
  var request = window.gapi.client.request({
    'method': requestMethod,
    'path': path,
    'params': params
  })

  return new Promise(resolve =>
    request.execute(function (response) {
      resolve(response)
    })
  )
}
