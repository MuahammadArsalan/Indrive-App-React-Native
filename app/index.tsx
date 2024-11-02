//  Screen par location render nhi hoi seach k btn k click par




import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, FlatListComponent } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { TextInput } from 'react-native';
interface AllPlaces {
  fsq_id: string;
  name: string
}

export default function App() {

  const [location, setLocation] = useState<{}|null|any>(null);
  const [errorMsg, setErrorMsg] = useState<null|{}|string |any>(null);
  const [Search, setSearch] = useState<null | any>('')

const [placesDetails, setPlacesDetails] = useState<null|AllPlaces[]>(null)
const [placesLL, setplacesLL] = useState<null|object|[]|any>(null)
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



// function searchPlaces(){

  
// {Search ?  fetch(`https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${Search}&key=AlzaSyDs7U8F4HhudlByBwmyxEDc6GG1FnOPF9z`)
// .then((res)=>{
//  return res.json()
// })
// .then((res)=>{
//   // console.log(res.predictions);
//   setPlacesDetails(res.predictions)
//   // console.log(placesDetails);

  
  
// })
// .catch((err)=>{console.log(err);
// })


// // console.log(res)
// : alert('Not Found')} 



// }



const searchPlaces = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'fsq3qbL9ORBTq2ZaS6TUHxpAQZNDJjTlkT2lBeAynwmhZ8I='
    }
  };

  fetch(`https://api.foursquare.com/v3/places/search?query=${Search}&ll=${location.coords.latitude}%2C${location.coords.longitude}&radius=100000`, options)


    .then(res => res.json())
    .then(res => {
      setPlacesDetails(res.results)
    })
    .catch(err => console.error(err));
  // console.log(Search)
}






return (

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

      {placesDetails && <FlatList
        data={placesDetails}

        renderItem={({ item }: { item: { name: string } }) => {
          return <View style={styles.list}>
            <Text>{item.name}</Text>
          </View>
        }}
        keyExtractor={(item: { fsq_id: string }) => item.fsq_id
        }
      />}
{/* {placesDetails  && <View style={styles.con}> 

<FlatList
        data={placesDetails}
        renderItem={({item}) =>{

return <View style={styles.conChild}>

<Text style={styles.conText}></Text>

</View>
        }}

        keyExtractor={item => item.id}
      />

      
</View> } */}
{/* 
 {placesDetails && <FlatList
        data={placesDetails}
        // renderItem={(item:{description:string}) => {
        renderItem={({item}) => {

// return <View style={styles.con}>

return <View style={styles.conChild}>

<Text style={styles.conText}>skbdsbdksbdk</Text>

</View>


   



        } }
        keyExtractor={item => item.place_id}
      />

}   */}










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
  
 
     
)


}




  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
   
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
    margin: 22,
    borderWidth: 1.5,
    borderRadius:20,
    padding: 10,
    borderColor:"green"
  },  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 13,
    margin:10,
    // marginTop:0,r
    borderRadius:20,
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
  },
  con:{
    height:320,
    marginHorizontal:40,
    borderColor:"grey",
    borderWidth:2,
    borderRadius:40,
    position:"relative",
    zIndex:2

    

  },
  conChild:{
    height:'auto',
    marginHorizontal:10,
    // borderColor:"grey",
    borderWidth:2,
marginTop:20,
borderRadius:7,
opacity:0.5,

},
conText:{
fontSize:15,
letterSpacing:2,


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