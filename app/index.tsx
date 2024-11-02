//  Screen par location render nhi hoi seach k btn k click par




import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { TextInput } from 'react-native';


export default function App() {

  const [location, setLocation] = useState<{}|null|any>(null);
  const [errorMsg, setErrorMsg] = useState<null|{}|string |any>(null);
  const [Search, setSearch] = useState<null | any>('')
const [Allplaces, setAllplaces] = useState<null|object|[]|any>([])
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



function searchPlaces(){

  
{Search ?  fetch(`https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${Search}&key=AlzaSyDs7U8F4HhudlByBwmyxEDc6GG1FnOPF9z`)
.then((res)=>{
 return res.json()
})
.then((res)=>{
  console.log(res);
  
})
.catch((err)=>{console.log(err);
})


// console.log(res)
: alert('Not Found')} 



}





return (

  <>

  
  <View style={styles.containera}>


  <TextInput
        style={styles.input}
        onChangeText={setSearch}
        value={Search}
        placeholder="Search.."
      />
<TouchableOpacity style={styles.button}>
        <Text  onPress={() => {searchPlaces()}}>Search</Text>
      </TouchableOpacity>


      
{/* map */}

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
  
  <Text>aaknjbdjbd</Text>
        </>
)


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
  },  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 13,
    margin:20,
    // marginTop:0,r
    marginHorizontal:100
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  list: {
    backgroundColor: 'gray',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    width: 280,
    color:"black"
  }
});































//   // const options = {
//   //   method: 'GET',
//   //   headers: {
//   //     accept: 'application/json',
//   //     Authorization: 'fsq32xO5rsUUQDDwDasyGuGN8poCEnzIb8fpkQnmkpXaHEw='
//   //   }
//   // };
  
//   // fetch(`https://api.foursquare.com/v3/places/search?query=${Search}&ll=24.8446976%2C67.0990336&radius=100000`, options)
//   //   .then(res => res.json())
//   //   .then(res => {

//   //     console.log(res.results)

//   //     setAllplaces(res.results)
//   //     console.log(Allplaces);
      
//   //   })
//   //   .catch(err => {
//   //     console.error(err)
//   //   })













//   // const options = {
//   //   method: 'GET',
//   //   headers: {
//   //     accept: 'application/json',
//   //     Authorization: 'fsq32xO5rsUUQDDwDasyGuGN8poCEnzIb8fpkQnmkpXaHEw='
//   //   }
//   // };

//   // fetch(`https://api.foursquare.com/v3/places/search?query=${search}&ll=${location.coords.latitude}%2C${location.coords.longitude}&radius=100000`, options)


//   //   .then(res => res.json())
//   //   .then(res => {
//   //     Allplaces(res.results)
//   //     log
//   //     console.log(Allplaces);
      
//   //   })
//   //   .catch(err => console.error(err));
//   // // console.log(search)