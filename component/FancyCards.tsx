import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style  = {styles.headingText}>Trending Place</Text>
      <View style = {[styles.Card, styles.CardElevated]}>
       <Image source = {{
        uri: 'https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?s=1024x1024&w=is&k=20&c=m5cYGPJsDS6nTsxYucy6jlCj7flGliYw6Lf4Ftg0jQs='
       }}
       style = {styles.CardImage}
       />
       <View style ={styles.CardBody}>
        <Text style ={styles.CardTitle}>NewYork City</Text>
        <Text style ={styles.CardLabel}>NewYork, USA</Text>
        <Text style = {styles.CardDescription}>New York, often called New York City (NYC), 
          is the most populous city in the United States. 
          It is at the southern end of the U.S. state of New York. 
          Over 8 million people currently live in the city, 
          and over 22 million people live.</Text>
        <Text style = {styles.CardFooter}>14 min away</Text>
       </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
      fontSize: 24,
      fontWeight : 'bold',
      paddingHorizontal : 8
    },
    Card : {
      width :390,
      height : 350,
      borderRadius: 10,
      marginVertical : 12,
      marginHorizontal : 12
    },
    CardElevated : {
      backgroundColor : '#FFFFFF',
      elevation : 4,
      shadowOffset :{
        width : 1, 
        height : 1
      }
    },
    CardImage :{
      height: 180,
      marginBottom: 6,
      borderTopLeftRadius : 10,
      borderTopRightRadius : 10
    },

    CardBody : {
      flex : 1,
      flexGrow : 1,
      paddingHorizontal : 12,

    },
    CardTitle : {
      color : '#000000',
      fontSize : 22,
      fontWeight : 'bold',
      marginBottom: 6,
    },
    CardLabel : {
      color : '#000000',
      fontSize : 16,
      marginBottom : 4
    },
    CardDescription : {
      color : '#242B2E',
      fontSize : 14,
      fontWeight : 'bold',
      marginBottom: 8
    },
    CardFooter : {
      color : '#000000',
    }




})