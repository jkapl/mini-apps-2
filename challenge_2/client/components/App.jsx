import React, { useState, useEffect } from 'react'
import Chart from 'chart.js';
import axios from 'axios';

const App = () => {
  const [coinData, setData] = useState({dates: ["2018-08-15", "2018-08-16", "2018-08-17", "2018-08-18"], prices: [6270.0425, 6314.2413, 6583.2388, 6395.3525]});
  const [example, setExample] = useState('hello');
  // let chart = React.createRef();

  useEffect(()=> {
    axios.get('/api/prices')
      .then(response => {
        setData({dates: response.data.dates, prices: response.data.prices});
        const myChart = new Chart(aChart, {
          type: "line",
          data: {
            labels: response.data.dates,
            datasets: [
              {
                data: response.data.prices
              }]
          }
        })
      })
  }, []);

  return (
    <div>
      <canvas style={{width: 800, height:300}} id="aChart" ></canvas>
    </div>
  );
}

export default App;
