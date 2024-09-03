import { View, Text , FlatList } from 'react-native'
import React from 'react'
import Product from './Props'

const PropsIndex = () => {

  const Products = [
    {
      product : " Watch",
      productImage : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
      productPrice : " 12",
    },
    {
      product : " HeadSet",
      productImage : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
      productPrice : " 20",
    },
    {
      product : " Cosmetics Set",
      productImage : "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
      productPrice : " 22",
    },
    {
      product : " Music Set",
      productImage : "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
      productPrice : " 32",
    },
    {
      product : "Neckband",
      productImage : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
      productPrice : " 1",
    },
  ]

  return (
    <View>
     <FlatList
       data={Products}
       renderItem={({item})  => (

        <Product 
         name = {item.product}
         productimage ={item.productImage}
         productprice ={item.productPrice}
         
        />

       )
      
      }
     />
    </View>
  )
}

export default PropsIndex