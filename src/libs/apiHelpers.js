export const GAPI_URL = 'https://apis.google.com/js/client.js'
export const API_KEY = 'AIzaSyDxepLxLVZQ7WAI9j29oQJYgUYgPw1ds6M'

function executeRequest (request) {
  request.execute(function (response) {
    console.log(response)
  })
}

export function buildApiRequest (requestMethod, path, params, properties) {
  var request = window.gapi.client.request({
    'method': requestMethod,
    'path': path,
    'params': params
  })

  executeRequest(request)
}
