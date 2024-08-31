import { View, Text , Image } from 'react-native'
import React from 'react'

const Part1 = () => {
  return (
    <View>
      
      <Image 
       source={require ("../assets/Sapta.jpg")}
       style={{ "height" : 200 , "width" : 200 , "marginTop" : 50 , "borderRadius"  : 200 , "marginLeft" :80}}
      />
    </View>
  )
}

export default Part1