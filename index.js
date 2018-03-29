require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive');
const port = process.env.PORT || 3000;    
const proCon = require('./db/products_controller');   

const app = express();
      app.use(bodyParser());
      app.use(cors());
      massive(process.env.CONNECTION_STRING).then(dbInstance => 
          app.set('db',dbInstance));   

      app.get('/api/products', proCon.getAll)
      app.get('/api/product/:id', proCon.getOne)
      app.put('/api/product/:id', proCon.update)
      app.post('/api/product', proCon.create)
      app.delete('/api/product/:id', proCon.delete)

      app.listen(port, () => {
          console.log(`I am listening on: ${port}`)
      })


