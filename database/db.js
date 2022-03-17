import mongoose from 'mongoose';

const Connection = async () => {
    
    try {
        await mongoose.connect(process.env.URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;