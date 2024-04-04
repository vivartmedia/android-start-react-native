import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import pexels from '../assets/pexels-photo-1072179.jpeg'

const StoriesComponent = () => {
  return (
    <ScrollView horizontal style={Styles.ScrollSTyle}>
      <Image source={pexels} style={Styles.ImageStyle}/>
      <Image source={pexels} style={Styles.ImageStyle}/>
      <Image source={pexels} style={Styles.ImageStyle}/>
      <Image source={pexels} style={Styles.ImageStyle}/>
      <Image source={pexels} style={Styles.ImageStyle}/>
      <Image source={pexels} style={Styles.ImageStyle}/>
      <Image source={pexels} style={Styles.ImageStyle}/>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  ImageStyle: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 20,
   
  },
  ScrollStyle: {
    paddingTop: 10,
    paddingBottom: 5
  }
})

export default StoriesComponent