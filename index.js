const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()
const errorHandler = require('./middleware/error')


// See if we have an environment variable first and if we don't, then use 5000

const PORT = process.env.PORT || 5000

const app = express()
// we are going to move this to the router directory and change app to router
// app.get('/api', (req, res) => {
//     res.json({success: true})
// });

// Routes
app.use('/api', require('./routes/index.js'))


// Rate limiting
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000, // 10 Mins
//   max: 100,
// })
// app.use(limiter)
// app.set('trust proxy', 1)

// Enable cors
app.use(cors())

// Set static folder
// This should load the index.html file on http://localhost:5000
// app.use(express.static('public'))
app.use(express.static('public'))
// // Routes
// app.use('/api', require('./routes'))

// // Error handler middleware
// app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

