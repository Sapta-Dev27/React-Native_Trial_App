import { Button } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
  
       <Button
        title='View My Portfolio'
        onPress={()=> alert(" My App is Under Maintainance")}
      
       />
    
  )
}

export default ButtonComponent