import express from 'express'

// Create Express server
const app = express()

app.set('port', process.env.PORT || 3001)

export default app
