const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));

app.get(`/api/prices`, (req, res)=> {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close?start=2018-08-15&end=2019-08-14`)
    .then((response) => {
      let dates = Object.keys(response.data.bpi);
      let prices = Object.values(response.data.bpi);
      let result = {dates: dates, prices:prices};
      res.send(JSON.stringify(result));
      })
    .catch(err => console.log(err));
})

app.listen(port, ()=> {console.log(`Listening on port ${port}`)})