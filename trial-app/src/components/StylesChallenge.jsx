import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import React from 'react'
import style from '../utils/external'

const StylesChallenge = () => {
  return (
    <View style={style.viewStyle}>
      <View style={style.viewStyle}>
        <View>
          <Text style={style.textStyle}>Hello , I am Saptarshi </Text>
        </View>
        <View>
          <Text style={style.textStyle}> I am a React Native Developer</Text>
        </View>
        <View>
          <Text style={style.textStyle}>Tech Stack : MERN</Text>
        </View>
        <View>
          <Text style={style.textStyle}>Languages Known : C , C++ , Python</Text>
        </View>
      </View>
      <View style={style.viewStyle}>
        <Image
          source={require("../assets/Sapta.jpg")}
          style={style.imageStyle}
        />
        <Pressable style={style.buttonStyle} onPress={() => alert("Visit My Website")}>
          <Text style={style.textstyle}>View My Portfolio</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default StylesChallenge