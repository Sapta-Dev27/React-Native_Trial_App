import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  textStyle: {
        height: 40 ,
        width : 300,
        textAlign : 'center' ,
        alignItems : 'center',
        margin: 20 ,
        padding: 8 ,
        backgroundColor : 'crimson',
        color : 'white' ,
        fontSize: 15 ,
        fontWeight: 500 ,
        borderRadius : 10,
  },
  viewStyle : {
        display : 'flex' ,
        justifyContent : 'center' ,
        alignItems: 'center' ,
        textAlign: 'center' ,
        backgroundColor : 'black' ,
  },
  buttonStyle : {
        backgroundColor: 'orange',
        margin: 20 ,
        height: 40 ,
        width: 250,
        borderRadius : 12,
  },
  imageStyle : {
        marginBottom: 20, 
        height: 200, 
        width: 200,
         borderRadius: 100,
  },
  textstyle: {
    textAlign: 'center' ,
    fontSize: 16 ,
    fontWeight:700 ,
    padding: 6,
  },
})

export default style;