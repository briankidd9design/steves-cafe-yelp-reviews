const express = require('express')
const router = express.Router()
const needle = require('needle')
//const apicache = require('apicache')

// Env vars
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_VALUE = process.env.API_KEY_VALUE

  router.get('/', async(req, res) => {
    // This makes the api request and puts the response into the apiRes variable
    try {
      const apiRes = await needle(
      'get', 
      `${API_BASE_URL}`,
      { headers: { "Authorization": `Bearer ${API_KEY_VALUE }`}}
      )
      const data = apiRes.body;
      // console.log(data);
      res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
  });

module.exports = router


