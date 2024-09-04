import { View, Text } from 'react-native'
import React from 'react'

const ValidPassword = () => {
   return(
    <Text>Valid Password</Text>
   )
}

const InvalidPassword = () => { 
  return ( 
    <Text>Invalid Password</Text>
  )
}

const Password = ({isValid}) => {
  if (isValid) {
    return (
      <ValidPassword/>
    )
  }
  return (
    <InvalidPassword/>
  )

}

const ConditionalRendering = () => {
  return (
    <View>
      <Password
      isValid={true}
      />
    </View>
  )
}

export default ConditionalRendering