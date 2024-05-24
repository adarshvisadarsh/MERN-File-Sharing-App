import mongoose from 'mongoose'

const DBconnection = async () => {
    const MONGODB_URL = `mongodb+srv://adarshvisadarsh:adarshvisadarsh@cluster0.zpfsfbd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try {
        await mongoose.connect(MONGODB_URL, { useNewUrlParser: true })
        console.log("Successfully Database connected")

    } catch (error) {
        console.log('Error while connecting database', error.message)
    }
}

export default DBconnection;