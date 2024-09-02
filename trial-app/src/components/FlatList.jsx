import { View, Text , FlatList} from 'react-native'
import React from 'react'

const images = [
  {
    id : 1 ,
    title : "I am Saptarshi Paul" ,
  },
  {
    id: 2 ,
    title : " I am Anuska Biswas " ,
  },
  {
    id : 3 ,
    title : " We both are going to married  soon",
  },
]

const Item = ({title}) => (
  <View >
    <Text >{title}</Text>
  </View>
);
const FlatLists = () => {
  return (
    <View>
      <FlatList
       data={images}
       renderItem={({item}) => <Item title={item.title} />}
       keyExtractor={item => item.id}
      />
    </View>
  )
}

export default FlatLists