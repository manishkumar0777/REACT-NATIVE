import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

 function FlatCards() {
  return (
    <View>
      <Text style = {styles.headingText}>FlatCards</Text>
        <View style = {styles.Container}>
            <View style = {[styles.Card , styles.CardOne]}>
                <Text>Red</Text>
            </View>

            <View style = {[styles.Card , styles.CardTwo]}>
                <Text>Green</Text>
            </View>

            <View style = {[styles.Card , styles.CardThree]}>
                <Text>Blue</Text>
            </View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 10
        
    },

    Container :{
        flex: 1,
        flexDirection : 'row',
        padding : 8,
    },

    Card :{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        width :100,
        height: 100,
        borderRadius: 5,
        margin: 10
    },

    CardOne :{
        backgroundColor : '#EF5354'
    },

    CardTwo:{
        backgroundColor: '#50DBB4'
    },
    
    CardThree :{
        backgroundColor: '#5DA3FA'
    }
})

export default FlatCards