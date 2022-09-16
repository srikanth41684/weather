import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const changeHandler = e => {
    setCity(e.target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response => response.json()
    ).then(data => {
      const kelvin = data.main.temp;
      const celsius = kelvin - 273.15;
      setResult("Temparature at " + city + "\n" + Math.round(celsius) + "°C");
      setCity("");
    })
  }
  return (
    <center>
      <div className='card'>
        <div className='card-body'>
          <h3 className='card-title'>Weather App</h3>
          <form onSubmit={submitHandler}>
            <input type="text" name="city" value={city} onChange={changeHandler}/> <br/><br/>
            <input type="submit" value="Get Temperature"/>
          </form>
          <h1>{result}</h1>
        </div>
      </div>
    </center>
  )
}

export default App;