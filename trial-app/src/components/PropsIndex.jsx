import { View, Text , FlatList } from 'react-native'
import React from 'react'
import Product from './Props'
import ModelsPage from './Props2'

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
 

  const Models = [
    {
      modelImage : "https://cdn.pixabay.com/photo/2024/08/19/03/41/ai-8979478_960_720.jpg",
      modelName : "Model_01" ,
      Genre : "Rough , Pussy , Stepmom" ,
      modelVideo : " View on  💦 Pornhub" ,
    },
    {
      modelImage : "https://cdn.pixabay.com/photo/2023/06/17/16/06/beauty-8070342_1280.jpg",
      modelName : "Model_02" ,
      Genre : "Soft , Sexual , Passionate" ,
      modelVideo : " View on  💦 PervMom" ,
    },{
      modelImage : "https://images.unsplash.com/photo-1531469535976-c6fc3604014f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      modelName : "Model_03" ,
      Genre : "Latin American , StepSister , Cheating" ,
      modelVideo : " View on  💦 Naughty America" ,
    },
    {
      modelImage : "https://cdn.pixabay.com/photo/2024/08/19/14/16/ai-8980865_960_720.jpg ",
      modelName : "Model_04" ,
      Genre : "American Pussy , Blowjob , Boobs , Tits" ,
      modelVideo : " View on  💦 OnlyFans" ,
    }, 
    {
      modelImage : "https://cdn.pixabay.com/photo/2024/06/11/06/51/ai-generated-8822135_960_720.jpg",
      modelName : "Model_05" ,
      Genre : " Stepmom , Boobs , Pussy , Tits" ,
      modelVideo : "View on  💦 PervMom" ,
    },
  ]


  return (
    <View>
      {/* 
     <FlatList
       data={Products}
       renderItem={({item})  => (
        
        <Product 
         name = {item.product}
         productimage ={item.productImage}
         productprice ={item.productPrice}
         
        />
        )}
     />
    */}
     <FlatList 
     data={Models}
     renderItem={({item}) => ( 

       <ModelsPage
       
       modelImage = {item.modelImage}
       modelName ={item.modelName}
       genre={item.Genre}
       modelVideo = {item.modelVideo}
       
       />


     )}     />

    </View>
  )
}

export default PropsIndex