import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const Contacts = [
        {
            id : 1,
            name : 'Raunak Kumar',
            status : ' I love runnng ..',
            imageUrl : 'https://toybook.com/wp-content/uploads/sites/4/2024/04/MooseToys_MinionsStretchyFiguresDave.jpg'
        },

        {
            id : 2,
            name : 'Praveen Kumar',
            status : ' I am a Cricketer ..',
            imageUrl : 'https://toybook.com/wp-content/uploads/sites/4/2024/04/MooseToys_DespicableMe4StretchyFigureTim.jpg'
        },

        {
            id : 3,
            name : 'Sandeep Kumar',
            status : ' I am a dancer..',
            imageUrl : 'https://i.pinimg.com/736x/f9/60/47/f96047b392ea5d8e277a816db4f17565.jpg'
        },

        {
            id : 4,
            name : 'Roshan Kumar',
            status : ' I l..',
            imageUrl : 'https://static.wikia.nocookie.net/despicableme/images/d/d2/DM3_Dave_selfie.jpg/revision/latest/scale-to-width-down/1200?cb=20170711184405'
        }
    ];
  return (
    <View>
      <Text style = {styles.headingText}>Contacts</Text>
      <ScrollView 
      style = {styles.Container} 
      scrollEnabled ={false}
      >
        {Contacts.map(({id, name, status, imageUrl}) => (
          <View key={id} style = {styles.userCard}>
            <Image 
            source = {{
              uri : imageUrl
            }}
            style = {styles.userImage}
            />
            <View>
            <Text style = {styles.userName}> {name}</Text>
            <Text style = {styles.userStatus}> {status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText : {
    fontSize : 24,
    fontWeight : 'bold',
    paddingHorizontal : 8
  },

  Container : {
    paddingHorizontal : 12,
    paddingVertical : 12,
    marginBottom : 4
  },

  userCard : {
    paddingVertical : 12,
    flex : 1,
    flexDirection : 'row',
    alignItems : 'center',
    marginBottom : 4,
    backgroundColor : '#8D3DAF',
    borderRadius : 14

  },

  userImage : {
    width : 60,
    height : 60,
    borderRadius : 60 / 2,
    marginLeft: 14
  },

  userName : {
    fontSize : 18,
    fontWeight : '600',
    color : '#FFF',
    paddingHorizontal : 10
  },

  userStatus : {
    paddingHorizontal : 10
  },
})