import { View, Text } from 'react-native'
import React from 'react'

const InlineStyles = () => {
  return (
    <View>
      <View
       style= {{ display : 'flex' , justifyContent : 'center' , alignItems : 'center'  , marginTop : 10}}
      >
        <Text
          style={{ backgroundColor: 'green', height: 100, width: 100, margin: 10  }}
        >Anuska Biswas</Text>
        <Text
          style={{ backgroundColor: 'crimson', height: 100, width: 100, margin: 10 , color: 'white' }}
        >8918344931</Text>
        <Text
          style={{ backgroundColor: 'orange', height: 100, width: 100, margin: 10 , fontSize: 10 }}
        >anuska.biswas.2004@gmail.com</Text>
        <Text
          style={{ backgroundColor: 'yellow', height: 100, width: 100, margin: 10 }}
        >Aspiring SDE</Text>
      </View>
    </View>
  )
}

export default InlineStyles