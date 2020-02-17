import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList
} from 'react-native';

const data = [
  {
    key: 1,
    name: 'Chidera',
    message: 'This is just a quick message to show how the app works',
    time: '10:06'
  },
  {
    key: 2,
    name: 'Samuel',
    message: 'This is just a quick message to show how the app works',
    time: '10:06'
  },
  {
    key: 3,
    name: 'Ike',
    message: 'This is just a quick message to show how the app works',
    time: '10:06'
  },
  {
    key: 4,
    name: 'Chidera',
    message: 'This is just a quick message to show how the app works',
    time: '10:06'
  },
  {
    key: 5,
    name: 'Samuel',
    message: 'This is just a quick message to show how the app works',
    time: '10:06'
  },
  {
    key: 6,
    name: 'Ike',
    message: 'This is just a quick message to show how the app works',
    time: '10:06'
  },
  {
    key: 7,
    name: 'Chidera',
    message: 'This is just a quick message to show how the app works',
    time: '10:06'
  },
  {
    key: 8,
    name: 'Samuel',
    message: 'This is just a quick message to show how the app works',
    time: '10:06'
  },
  {
    key: 9,
    name: 'Ike',
    message: 'This is just a quick message to show how the app works',
    time: '10:06'
  },
  {
    key: 10,
    name: 'Chidera Ike',
    message: 'This is the end of the application.',
    time: '10:20'
  }
]

const ListItem = ({item}) => {
  return(
    <View style={{flexDirection: 'row', padding: 15}}>
      <View style={{}}>
        <Image style={{width: 60, height: 60, borderRadius: 30}} source={require('./assets/IMG_7287.png')} />
      </View>
      <View style={{flex: 1, marginLeft: 15, justifyContent: 'center', borderBottomWidth: 0.25, borderBottomColor: 'grey', padding: 5}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
          <Text style={{color: '#555555'}}>{item.time}</Text>
        </View>
        <View>
          <Text numberOfLines={1} style={{color: '#555555'}}>{item.message}</Text>
        </View>
      </View>
    </View>
  )
}

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{textAlign: "center", fontSize: 25, fontWeight: 'bold'}}>WhatsApp Clone</Text>
      </View>
      <FlatList 
        data={data}
        keyExtractor={(item)=>item.key.toString()}
        renderItem={({item, index})=>(<ListItem item={item} key={index} />)}
      />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    paddingTop: 50
  }
})