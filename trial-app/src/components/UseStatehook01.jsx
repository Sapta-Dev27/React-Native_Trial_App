import { View, Text , Button, StyleSheet} from 'react-native'
import React from 'react'
import { useState } from 'react'



const UseStatehook01 = () => {


    const [ counter , setCounter ] = useState(0);

  return (
    <View style={Styles.viewStyle}>
        <Text style={Styles.textStyle} >Counter : {counter}</Text>
        <Button
        style={Styles.buttonStyle}
         title='IncreaseValue' 
         onPress={() => setCounter(counter+1)}
         />
         <Button style={Styles.buttonStyle}
         title='DecreaseValue'
         onPress={()=> setCounter(counter-1)}
         />
         <Button 
         style={Styles.buttonStyle}
         title='Multiply By 10'
         onPress={()=> setCounter(counter * 10)}
         />
         <Button 
         style={Styles.buttonStyle}
         title = 'Divide By 2'
         onPress={()=> setCounter(counter / 2)}
         />
    </View>

  )
}

const Styles = StyleSheet.create( { 
   textStyle : {
    fontSize: 20 ,
    fontFamily: 'san-serif',
    color: 'orange',
    margin:20,
   },
   viewStyle : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
   },
   buttonStyle : {
    height: 40 ,
    width : 200 ,
    
   }
})

export default UseStatehook01