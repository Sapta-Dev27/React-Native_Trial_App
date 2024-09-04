import { View, Text } from 'react-native'
import React from 'react'

const ValidPassword = () => { 
  return (
    <Text>Valid Password</Text>
  )
}

const InvalidPassword = () => { 
  return (
    <Text>Invalid Password</Text>
  )
}

const TernaryOperator = ( {isValid}) => { 
   isValid ? 
   <ValidPassword/> : <InvalidPassword/>
}


const ConditionalTernary = () => {
  return (
    <View>
        <Text>Ternary Operator </Text>
         <TernaryOperator isValid={true} />
    </View>
  )
}

export default ConditionalTernary