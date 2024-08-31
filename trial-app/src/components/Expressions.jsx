import { View, Text , Image, Button } from 'react-native'
import React from 'react'
const price = 500000;
const CarName = "Ferrari 911"; 
const Rating = 4.9;
const Description = " This is a Car which everyone can't afford"
const Expressions = () => {
  return (
    <View>
      <Image
      source ={require("../assets/Ferrari.jpeg")}
      style ={{ "height" : 300 , "width":300 , "marginTop" : 20 , "borderRadius" : 10 , "marginLeft":50}}
      />
      <Text
      style={{  "marginTop" : 20 ,  "marginLeft": 50 , "fontSize" : 20 , "fontWeight": 600}}
      >Price:{price}</Text>
      <Text
      style={{  "marginTop" : 20 ,  "marginLeft": 50 , "fontSize" : 20 , "fontWeight": 400}}
      >Car Model:{CarName}</Text>
      <Text
      style={{  "marginTop" : 20 ,  "marginLeft": 50 , "fontSize" : 20 , "fontWeight": 400}}
      >Car Description :{Description}</Text>
      <Text
      style={{  "marginTop" : 20 ,  "marginLeft": 50 , marginBottom: 40 ,"fontSize" : 20 , "fontWeight": 600}}
      >Car Rating : {Rating}</Text>
      <Button 
      title='Buy Now'
      color="#841584"
      onPress={() => alert("Proceed to Buy this Car and FLEX it in your DAILY LIFE-CIRLE")}
      />
      <Button 
      title='Add To Cart'
      disabled
      onPress={() => alert("Proceed to Buy this Car and FLEX it in your DAILY LIFE-CIRLE")}
      />
      
    </View>
  )
}

export default Expressions