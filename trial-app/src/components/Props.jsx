import { View, Text, Image , StyleSheet } from 'react-native'
import React from 'react'

const Props = ({ name , productprice , productimage}) => {
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>Car Name : {name}</Text>
      <Text style={style.textStyle}>Car Price : ${productprice}</Text>
      <Image 
      source ={{uri:productimage}}
      style = {style.imageStyle}
      />
    </View>
    

  )
}

const style = StyleSheet.create({
  container:{
    backgroundColor : 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems:  'center' ,
    textAlign: 'center',
  },
  textStyle : {
    fontSize : 20,
    fontFamily: 'san-serif',
    color : 'crimson',
    margin: 2,
    padding: 4,
  },
  imageStyle : {
    borderRadius: 20,
    height: 200 ,
    width: 200 ,
  },
})


export default Props