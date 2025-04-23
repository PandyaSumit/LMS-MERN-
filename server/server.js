import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import connectCloudinary from './configs/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import courseRouter from './routes/courseRoute.js'

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
  }))

app.use(clerkMiddleware())

// Webhooks
app.post('/clerk', express.json(), clerkWebhooks)
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks)

// Routes
app.use('/api/educator', express.json(), educatorRouter)
app.use('/api/course', express.json(), courseRouter)
app.use('/api/user', express.json(), userRouter)

// Base Route
app.get('/', (req, res) => res.send('API Working'))

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

const PORT = process.env.PORT || 5000

const startServer = async () => {
  try {
    await connectDB()
    await connectCloudinary()
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
