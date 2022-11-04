import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-web';


const DATA = [
  {
    name:"Ahsan Khan",
    phone:12341234
  },
  {name:"usmankhan",
    phone :234788234
  },
  {
    name:"ali",
    phone:128341234
  },
  {name:"pervaiz",
    phone :23454234
  },
];

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.Name}>{name}</Text>
  </View>
);

const Flat = () => {
  const renderItem = ({ item }) => (
    <Item name={item.name} />
  );

  return (<>
  <SafeAreaView >
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.name}
       
      /> 
        <TextInput style={styles.txt} placeholder='Name' ></TextInput>
        <TextInput style={styles.txt} placeholder='Phonenumber' ></TextInput>
        <TouchableOpacity 
        style={{
          width:100,
          height:25,
          borderRadius:2,
          borderWidth:2,
          textAlign:"center",
          
        }}
        >Edit</TouchableOpacity>
    </SafeAreaView>
  
    </>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
  item: {
    backgroundColor: '#fff',
    borderColor:"black",
    borderWidth:2,
    width:200,
    textAlign:"center"

  },
  Name: {
    fontSize: 16,
  },
  txt: {
    height:30,
    alignSelf:"ceter",
    borderWidth:2,
    width:200
  },
});


export default Flat;






















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































