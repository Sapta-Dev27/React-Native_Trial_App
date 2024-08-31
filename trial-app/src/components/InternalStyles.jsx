import { View, Text  , StyleSheet} from 'react-native'
import React from 'react'

const InternalStyles = () => {
  return (
    <View>
      <Text  style={styles.styleText}> Welcome to My Portfolio</Text>
    </View>
  )
}
 
const styles = StyleSheet.create({
  styleText : {
    fontSize: 20,
    backgroundColor : 'orange' ,
    height : 40 ,
    width: 240 ,
    color : 'white',
    marginTop : 20 ,
    marginLeft : 75 ,
    padding : 4,
    borderRadius : 10,
  }
})


export default InternalStyles