import { View } from 'react-native'
import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import TextComponent from '../components/TextComponent'
import ViewComponent from '../components/ViewComponent'
import Part1 from '../components/Part1'
import Expressions from '../components/Expressions'
import InlineStyles from '../components/InlineStyles'
import InternalStyles from '../components/InternalStyles'
import ExternalStyles from '../components/ExternalStyles'
import StylesChallenges from '../components/StylesChallenge'
import FlatList from '../components/FlatList'
import FlatListChallenge from '../components/FlatListChallenge'
import PropsIndex from '../components/PropsIndex'
import Props from '../components/Props'
const index = () => {
  return (
    <View>
      {/*
      <TextComponent />
      <ButtonComponent />
      <Expressions/>
      <Part1/>
      <ViewComponent/>
      <InlineStyles/>
      <InternalStyles/>
      <ExternalStyles/>
      <StylesChallenges/>
      <FlatList />
      <FlatListChallenge/>
      */}
      <PropsIndex/>
    </View>
  )
}

export default index