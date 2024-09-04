import { View, Text ,FlatList } from 'react-native'
import React from 'react'


const groceries = [ " apple " , " banana " , " orange " , " guava " , " pineapple"  ]


const Cart = () => {
 
 
    if (groceries.length > 0 && groceries.length < 6){
      return (
        <View>
        <Text>View Your Cart </Text>
        <Text>Your Cart contains {groceries.length} Products </Text>
        </View>
      )
    }
}



const Conditional02 = () => {
  return (
    <View>
         <Cart/>
        <FlatList
        
        data = {groceries}
        renderItem={({item}) => 
         <Text>{item}</Text>
        }
        
        />
    </View>
  )
}

export default Conditional02