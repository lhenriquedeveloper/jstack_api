import express from 'express';
import mongoose from 'mongoose';

//try to connect to mongodb, if successful start server
//mongoose returns a promise so we can use then and catch
mongoose.connect('mongodb://localhost:27017/')
  .then(() => {
    const app = express();
    const port = 3001;
    app.listen(3001, () => {
      console.log(`🚀Server is running on port ${port}`);
    });
    console.log('connected to mongodb');
  })

  .catch(() => console.log('could not connect to mongodb and start server'));

