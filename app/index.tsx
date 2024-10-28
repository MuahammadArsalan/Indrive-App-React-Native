




import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, FlatList } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { TextInput } from 'react-native';

export default function App() {
  const [location, setLocation] = useState<{}|null|any>(null);
  const [errorMsg, setErrorMsg] = useState<null|{}|string |any>(null);
const [Allplaces, setAllplaces] = useState<null|object|[]|any>(null)
const [Search, setSearch] = useState<null | object>(null)


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  if (!location) {
    return (
      <View style={styles.containera}>
        {/* <Text>{text}</Text> */}
      </View>

    )
  }





  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'fsq32xO5rsUUQDDwDasyGuGN8poCEnzIb8fpkQnmkpXaHEw='
    }
  };
  
  fetch('https://api.foursquare.com/v3/places/search?query=jubilee%20snack&ll=24.8446976%2C67.0990336&radius=100000', options)
    .then(res => res.json())
    .then(res => {

      // console.log(res.results)

      setAllplaces(res.results)
    })
    .catch(err => {
      console.error(err)
    })





  


  return (

    <>
  {/* {Allplaces &&  <FlatList
        data={Allplaces}
        renderItem={({item}) => {
          return <View>
            {item.name}
          </View>
        }}
        keyExtractor={item => item.id}
      />} */}
    
    
    <View style={styles.containera}>


    <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={Search}
          placeholder="Search.."

        />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.002,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          />
      </MapView>
    </View>
          </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  containera: {
    flex: 1,
  },

  map: {
    width: '100%',
    height: '100%',
  },
  input: {
    height:60,
    margin: 42,
    borderWidth: 1.5,
    padding: 10,
  },
});

