import React, {useState} from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
   
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)

      })
      setLocation('')
    )
  }
  return (
    <div className='app'>
       <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>

          </div>
          <div className='temp'>
          {data.main ? <h3>{data.main.temp_max}°F</h3> : null}
          {/* {data.main ? <h3>{data.main.temp_min.toFixed()}°F</h3> : null} */}
            {/* <h4>{data.main.temp_min}</h4> */}
          </div>
          <div className='description'>
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            
          {data.main ? <p><p>Feels like</p>{data.main.feels_like}°F</p> : null}
          </div>
          <div className='humidity'>
          {data.main ? <p><p>Humidity</p>{data.main.humidity}%</p> : null}
          </div>
          <div className='wind'>
          {data.main ? <p><p>wind Speed</p>{data.wind.speed}MPH</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
