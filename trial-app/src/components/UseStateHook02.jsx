import { View, Text , FlatList, Button} from 'react-native'
import React from 'react'
import { useState } from 'react'


const UseStateHook02 = () => {

  const [ companies , setCompanies] = useState( [ "Google" , "Microsoft" , " Amazon " , " Facebook" , " Netflix"])

  const addOne = () => {
    setCompanies([...companies, "Apple"])
  }


  return (
    <View>
        <FlatList 
        data={companies} 
        renderItem={({item}) =>
          <Text>{item}</Text>}
      
         />
          
          <Button
          title='Add One'
          onPress={addOne} />
      
        
      
    </View>
  )
}

export default UseStateHook02