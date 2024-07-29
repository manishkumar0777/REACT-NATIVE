import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {

    // this fuction open the website link passed when it is called *********************
    function openWebsite (websiteLink : string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>Blog Card</Text>
      <View style = {[styles.Card, styles.CardElevated]}>
        <View style = {styles.headingContainer}>
            <Text style = {styles.headerText}>Whats new in Java 21 ?</Text>
        </View>

        <Image source = {{
            uri : 'https://as2.ftcdn.net/v2/jpg/02/92/83/57/1000_F_292835773_oImixQGFKLpOPnjfsbesHyqdjOk5hsxL.jpg'
        }}
        style = {styles.CardImage}
        />
        <View style = {styles.BodyContainer}>
            <Text numberOfLines={3} style = {styles.FooterText}>
            Java 21 introduced three new interfaces to represent sequenced collections,
            sequenced sets, and sequenced maps. A sequenced collection is a collection 
            whose elements have a defined encounter order. It has first and last elements,
            and the elements between them have successors and predecessors.
            </Text>
        </View>
        <View style = {styles.FooterContainer}>
            <TouchableOpacity
             onPress={() => openWebsite('https://www.baeldung.com/java-lts-21-new-features#:~:text=Java%2021%20introduced%20three%20new,them%20have%20successors%20and%20predecessors.')}
            >
                <Text style = {styles.SocialText}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com/hell_boyf/')}
            >
                <Text style = {styles.SocialText}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8

    },

    Card : {
        width :390,
        height : 360,
        borderRadius: 10,
        marginVertical : 12,
        marginHorizontal : 12 
    },
    CardElevated : {
        backgroundColor : '#E07C24',
        elevation : 4,

        shadowOffset : {
            width : 1, 
            height : 1
        },
        shadowColor : '#333',
        shadowOpacity : 0.3
    },
    headingContainer : {
        height : 40,
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    headerText : {
        fontSize : 16,
        fontWeight : '600',
        color : '#000000'
    },
    CardImage : {
        height : 180,
        borderRadius : 7,
    },
    BodyContainer : {
        padding : 10,
    },
    FooterText : {
        color : '#000000'
    },
    FooterContainer : {
        padding : 8,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    SocialText : {
        color : '#000000',
        fontSize : 18,
        fontWeight : '400',
        backgroundColor: '#fff',
        paddingHorizontal : 20,
        paddingVertical : 8,
        borderRadius : 6,
        
    }
})