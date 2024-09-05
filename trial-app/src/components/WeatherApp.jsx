import { View, Text , TextInput , Button } from 'react-native'
import React from 'react'
import { useState } from 'react';


const weatherApp = { 
   Paris : " Sunny " ,
   London : " Rainy " ,
   NewYork : " Cloudy" ,
};

const WeatherApp = () => {
  
   const [ city , setCity ] = useState('')
   const [weather , setWeather ] = useState('')

   const getWeather = () => { 
     setWeather(weatherApp[city] || " No DATA AVAILABLE")
   }

  return (
    <View>
      <Text>Welcome To My Weather App</Text>
      <TextInput placeholder='Enter the City Name ' value={city}  onChangeText={setCity} />
      <Button title='Get Weather' onPress={getWeather} />
      {weather ? <Text>The current weather of {city} is {weather}</Text> :' NULL'}
    
    </View>
  )
}

export default WeatherApp