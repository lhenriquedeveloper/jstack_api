import express from 'express';
import mongoose from 'mongoose';

//importing my routes
import { router } from './app/router';

//try to connect to mongodb, if successful start server
//mongoose returns a promise so we can use then and catch
mongoose.connect('mongodb://localhost:27017/')
  .then(() => {
    const app = express();
    const port = 3001;

    //saying to my app to use the static files, instead of try to resolve this using a controller or a route
    app.use('/static', express.static('../uploads'));
    //using json to parse the body of the request
    app.use(express.json());
    //asking to my app to use this router
    app.use(router);

    app.listen(3001, () => {
      console.log(`🚀Server is running on port ${port}`);
    });
    console.log('connected to mongodb');
  })

  .catch(() => console.log('could not connect to mongodb and start server'));

