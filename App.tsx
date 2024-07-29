import react from 'react'


import { 
  View,
  Text,
  SafeAreaView,
  ScrollView
 } from 'react-native'
import FlatCards from './component/FlatCards'
import ElevatedCards from './component/ElevatedCards'
import FancyCards from './component/FancyCards'
import ActionCards from './component/ActionCards'
import ContactList from './component/ContactList'


const App = () =>{
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards></FlatCards>
        <ElevatedCards></ElevatedCards>
        <FancyCards></FancyCards>
        <ActionCards></ActionCards>
        <ContactList></ContactList>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App