import { View, Text , StyleSheet , Image, Button } from 'react-native'
import React from 'react'

const Props2 = ({ modelName, modelImage , genre , modelVideo}) => {
  return (
    <View style={Style.container}>
      <View>
        <Image
        source={{uri:modelImage}} 
        style={Style.imageStyle}
        />
      </View>
      <View>
        <Text style={Style.textStyle}>Model Name : {modelName}</Text>
        <Text style={Style.textStyle2}>Genre :{genre}</Text>
      </View>
      <View>
        <Button
        pink
        style={Style.buttonStyle}
        title={modelVideo}
        />
      </View>
    </View>
  )
}

const Style = StyleSheet.create({
  container: {
    display:'flex' ,
    justifyContent: 'center' ,
    alignItems: 'center',
    textAlign: 'center',
    margin: 5,
  },
  textStyle : {
    fontSize: 15 ,
    color : 'orangered',
    fontFamily: 'cursive',
    margin: 4 ,
    padding : 4,
  },
  textStyle2 : {
    fontSize: 12 ,
    color : 'green',
    fontFamily: 'cursive',
    margin: 4 ,
    padding : 4,
    marginBottom: 5,
  },
  buttonStyle : {
    height: 40 ,
    width: 250 ,
    backgroundColor: 'pink',
    padding: 4,
    textAlign: 'center',
    borderRadius: 10,
    
  },
  imageStyle : {
    height: 200 ,
    width: 200 ,
    borderRadius: 12,
  }
})





export default Props2