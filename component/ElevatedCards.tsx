import { StyleSheet, Text, View ,ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal ={true} style = {styles.Container}>
        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>slide</Text>
        </View>

        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>Me</Text>
        </View>

        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>To</Text>
        </View>

        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>Scroll</Text>
        </View>

        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>more...</Text>
        </View>

        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>more..</Text>
        </View>

        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>😊</Text>
        </View>

        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>👌</Text>
        </View>

        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>😁</Text>
        </View>

        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>🤣</Text>
        </View>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 10,
        
    },

    Container : {
        flex : 1,
        flexDirection: 'row',
        padding : 8
    },

    Card : { 
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        width : 110,
        height : 110,
        borderRadius : 5,
        margin : 8,
    },

    CardElevated:{
      backgroundColor : '#A6ACAF',
      elevation : 4,
      shadowOffset :{
        width : 1,
        height : 1
      },
      shadowColor : '#333',
      shadowOpacity: 0.4,
      shadowRadius: 2
    }
})