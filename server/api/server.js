import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from '../configs/mongodb.js'
import connectCloudinary from '../configs/cloudinary.js'
import userRouter from '../routes/userRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import { clerkWebhooks, stripeWebhooks } from '../controllers/webhooks.js'
import educatorRouter from '../routes/educatorRoutes.js'
import courseRouter from '../routes/courseRoute.js'

let isConnected = false

const app = express()

app.use(cors({
    origin: ["http://localhost:5173", "https://lms-mern-mrnu.vercel.app/"],
    credentials: true
}));
app.use(express.json());
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

export default async function handler(req, res) {
    if (!isConnected) {
        await connectDB()
        await connectCloudinary()
        isConnected = true
    }
    return app(req, res)
}
