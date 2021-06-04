const axios = require('axios')
const { send } = require('micro')
const microCors = require('micro-cors')
const cors = microCors({ allowMethods: ['GET'] })
const DOMAIN = 'https://xkcd.com/'
const PATH = 'info.0.json'

const handler = async function(req, res) {
  let id = req.url.replace('/', '')
  const comicId = id ? `${id}/` : ''
  const path = `${DOMAIN}${comicId}${PATH}`
  const response = await axios(path)
  console.log(response);
  send(res, 200, response.data)
}

module.exports = cors(handler)
