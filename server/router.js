const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send('server is up and its running now')
})

module.exports = router
