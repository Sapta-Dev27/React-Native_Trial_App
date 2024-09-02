import { View, Text, FlatList ,Image  } from 'react-native'
import React from 'react'




const Data = [
  {
    image: "https://images.app.goo.gl/zdhw2HWWfbLsjUfm6",
    Name: "Anuska Biswas",
    Designation: " Senior SDE at Google ",
    Description: "I am a software developer with a passion for creating innovative solutions ",
    id: 1 ,
  },
  {
    image:  "https://images.app.goo.gl/zdhw2HWWfbLsjUfm6",
    Name: "Saptarshi Paul",
    Designation: " Senior SDE at Google",
    Description: "I am a software developer with a passion for creating innovative solutions ",
    id : 2,
  },
  {
    image:  "https://images.app.goo.gl/zdhw2HWWfbLsjUfm6",
    Name: 'Ferrari',
    Designation: " Mrs Anuska Paul",
    Description: "Ferrari is a luxury sports car brand ",
    id: 3,
  },
  {
    image: "https://images.app.goo.gl/zdhw2HWWfbLsjUfm6",
    Name: 'Porsche',
    Designation: " Mr Saptarshi Paul",
    Description: "Ferrari is a luxury sports car brand ",
    id: 4,
  },
]



const renderItem = ({ item }) => (
  <View >
    <Image source={{ uri: item.image }}  />
    <Text >{item.Name}</Text>
    <Text >Designation: {item.Description}</Text>
    <Text >Description: {item.Designation}</Text>
  </View>
);

const FlatListChallenge = () => {
return (
  <FlatList
    data={Data}
    renderItem={renderItem}
    keyExtractor={(item, index) => index.toString()}
  />
);
}


export default FlatListChallenge



