// //  Screen par location render nhi hoi seach k btn k click par




// import { useState, useEffect } from 'react';
// import { Platform, Text, View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, FlatListComponent, registerCallableModule } from 'react-native';
// import * as Location from 'expo-location';
// import MapView, { Marker, Polyline } from 'react-native-maps';
// import { TextInput } from 'react-native';
// interface AllPlaces {
//   fsq_id: string;
//   name: string
// }

// export default function App() {

//   const [location, setLocation] = useState<{}|null|any>(null);
//   const [errorMsg, setErrorMsg] = useState<null|{}|string |any>(null);
//   const [Search, setSearch] = useState<null | any>('')

//   const [region, setRegion] = useState<any>(null);
// const [placesDetailsLL, setPlacesDetailsLL] = useState<null|AllPlaces[]>(null)
// const [placesDetailsDesc, setPlacesDetailsDesc] = useState<null|any>(null)


//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }


//   if (!location) {
//     return (
//       <View style={styles.containera}>
//         {/* <Text>{text}</Text> */}
//       </View>

//     )
//   }



// function searchPlacesDescFunc(){

  
// {Search ?  fetch(`https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${Search}&key=AlzaSyDs7U8F4HhudlByBwmyxEDc6GG1FnOPF9z`)
// .then((res)=>{
//  return res.json()

// })
// .then((res)=>{
//   // console.log(res.predictions);
//   setPlacesDetailsDesc(res.predictions)
  
//   // console.log(placesDetails);

  
//   setSearch(null)
// })
// .catch((err)=>{console.log(err);
// })



// // console.log(res)
// : alert('Not Found')} 



// }




// const searchPlacesllFunc = (item:{place_id:string}) => {

// setPlacesDetailsDesc(null)
//   fetch(`https://maps.gomaps.pro/maps/api/place/details/json?place_id=${item.place_id}&key=AlzaSyiiV2_A9cr7d7jCOvGIqIJJh94acsfgrCc`)
//   .then(response => response.json())
//   .then(data => {
//     const location = data.result.geometry.location;
//     // console.log(`Latitude: ${location.lat}, Longitude: ${location.lng}`);
// {location && setPlacesDetailsLL(location)}
// // {placesDetailsLL&& console.log(placesDetailsLL)}  
  

// })
//   .catch(err => console.log(err));



// }

// const singlePlace = () => {
//   // setPlacesDetailsDesc(null);

 
//   {placesDetailsLL&& setRegion({
//     latitude: placesDetailsLL.lat,
//     longitude: placesDetailsLL.lng,
//     latitudeDelta: 0.001,
//     longitudeDelta: 0.001,
//   })}

// }




// function poly () {
//   fetch(`https://maps.gomaps.pro/maps/api/directions/json?origin=${location.coords.latitude},${location.coords.longitude}&destination=${placesDetailsLL.lat},${placesDetailsLL.lng}&key=AlzaSyiiV2_A9cr7d7jCOvGIqIJJh94acsfgrCc`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
    
//   })
//   .catch(err => console.error(err));
// }

// return (
//   <View style={styles.containera}>

//   <TextInput
//         style={styles.input}
//         onChangeText={setSearch}
//         value={Search}
//         placeholder="Search.."
//     />
// <TouchableOpacity style={styles.button}>
//         <Text  onPress={() => {searchPlacesDescFunc()}}>Search</Text>
//       </TouchableOpacity>


//       {placesDetailsDesc && <FlatList
//         data={placesDetailsDesc}
     

//         renderItem={({ item }: { item: { description: string } }) => {
     
// // console.log(item);

// return <View style={styles.conChild}  >

// <Text onPress={()=>{searchPlacesllFunc(item), singlePlace(),poly()}} style={styles.conText}>{item.description}</Text>

// </View>

//         }}
//         keyExtractor={(item: { place_id: string }) => item.place_id
//         }
//       />}



// {/* map */}

// {location &&     <MapView region={region} onRegionChangeComplete={setRegion} 
//       style={styles.map}
//       initialRegion={{
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//         latitudeDelta: 0.001,
//         longitudeDelta: 0.002,
//       }}
//     >
//       <Marker
//         coordinate={{
//           latitude: location.coords.latitude,
//           longitude: location.coords.longitude,
//         }}
//         />

// {placesDetailsLL&& <Marker coordinate={{
//   latitude:placesDetailsLL.lat,
//   longitude:placesDetailsLL.lng,

// }}></Marker>
// }

// {placesDetailsLL && <Polyline coordinates={[{latitude:location.coords.latitude,longitude:location.coords.longitude},{latitude:placesDetailsLL.lat,longitude:placesDetailsLL.lng}]}/>}

//     </MapView>}
//   </View>
  
 
     
// )


// }




  

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
   
//   },
//   paragraph: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   containera: {
//     flex: 1,
//   },

//   map: {
//     width: '100%',
//     height: '48%',
//   },
//   input: {
//     height:60,
//     margin: 22,
//     borderWidth: 1.5,
//     borderRadius:20,
//     padding: 10,
//     borderColor:"green"
//   },  button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 13,
//     marginTop:0,
//     // marginTop:0,r
//     borderRadius:20,
//     marginHorizontal:100
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
//   list: {
//     backgroundColor: 'gray',
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
//     padding: 5,
//     width: 280,
//     color:"black"
//   },
//   con:{
//     height:320,
//     marginHorizontal:40,
//     borderColor:"grey",
//     borderWidth:2,
//     borderRadius:40,
//     position:"relative",
//     zIndex:2

    

//   },
//   conChild:{
//     height:'auto',
//     marginHorizontal:10,
//     // borderColor:"grey",
//     borderWidth:2,
// marginTop:20,
// borderRadius:7,
// opacity:0.5,

// },
// conText:{
// fontSize:15,
// letterSpacing:2,


// }
// });



import { View, Text, SafeAreaView, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const index = () => {

const [Email,setEmail] =useState('')
const [Name,setName] =useState('')
const [Password,setPassword] =useState('')


  return (
    <SafeAreaView style={styles.con}>

<View>
<View style={styles.loginTitle}>
  
<Text style={styles.txt}>Login</Text>
</View>
 <View style={styles.inputDiv}>
 
 <TextInput
          style={styles.input}
          onChangeText={setName}
          value={Name}
          placeholder="Enter your Name"
         placeholderTextColor="white"
        />
<TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={Email}
          placeholder="Enter your Email"
          placeholderTextColor="white"
     
        />

<TextInput 
          style={styles.input}
          onChangeText={setPassword}
          value={Password}
          placeholder="Enter your Password"
          // keyboardType="numeric" 
         placeholderTextColor="white"

        />


 </View>

 <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Press Here</Text>
        </TouchableOpacity>

</View>

    </SafeAreaView>
  )
}




const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderRadius:10,
    borderWidth: 1,
    color:"white",
    padding: 15,
  borderColor:"white"
  
  },

  loginTitle:{
  },
  txt:{
    //   fontSize:"40",
    textAlign:"center",
    fontSize:60,
    padding:20,
    color:"white"
    // margin:"20"
  },
  inputDiv:{
    padding:30
  },
  con:{
    flex: 1,
    backgroundColor:"black",


  }


})

export default index














// //   // const options = {
// //   //   method: 'GET',
// //   //   headers: {
// //   //     accept: 'application/json',
// //   //     Authorization: 'fsq32xO5rsUUQDDwDasyGuGN8poCEnzIb8fpkQnmkpXaHEw='
// //   //   }
// //   // };
  
// //   // fetch(`https://api.foursquare.com/v3/places/search?query=${Search}&ll=24.8446976%2C67.0990336&radius=100000`, options)
// //   //   .then(res => res.json())
// //   //   .then(res => {

// //   //     console.log(res.results)

// //   //     setAllplaces(res.results)
// //   //     console.log(Allplaces);
      
// //   //   })
// //   //   .catch(err => {
// //   //     console.error(err)
// //   //   })













// //   // const options = {
// //   //   method: 'GET',
// //   //   headers: {
// //   //     accept: 'application/json',
// //   //     Authorization: 'fsq32xO5rsUUQDDwDasyGuGN8poCEnzIb8fpkQnmkpXaHEw='
// //   //   }
// //   // };

// //   // fetch(`https://api.foursquare.com/v3/places/search?query=${search}&ll=${location.coords.latitude}%2C${location.coords.longitude}&radius=100000`, options)


// //   //   .then(res => res.json())
// //   //   .then(res => {
// //   //     Allplaces(res.results)
// //   //     log
// //   //     console.log(Allplaces);
      
// //   //   })
// //   //   .catch(err => console.error(err));
// //   // // console.log(search)










































// import { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
// import * as Location from 'expo-location';
// import MapView, { Marker, Polyline } from 'react-native-maps';

// interface AllPlaces {
//   fsq_id: string;
//   name: string;
// }

// export default function App() {
//   const [location, setLocation] = useState<{} | null | any>(null);
//   const [errorMsg, setErrorMsg] = useState<null | {} | string | any>(null);
//   const [Search, setSearch] = useState<null | any>('');
//   const [region, setRegion] = useState<any>(null);
//   const [placesDetailsLL, setPlacesDetailsLL] = useState<null | AllPlaces[]>(null);
//   const [placesDetailsDesc, setPlacesDetailsDesc] = useState<null | any>(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   const searchPlacesDescFunc = () => {
//     if (Search && Search.trim() !== '') {
//       fetch(`https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${Search}&key=AlzaSyDs7U8F4HhudlByBwmyxEDc6GG1FnOPF9z`)
//         .then(res => res.json())
//         .then(res => {
//           setPlacesDetailsDesc(res.predictions);
//           setSearch('');
//         })
//         .catch(err => console.error(err));
//     } else {
//       alert('Please enter a valid search term');
//     }
//   };

//   const searchPlacesllFunc = (item: { place_id: string }) => {
//     setPlacesDetailsDesc(null);
//     fetch(`https://maps.gomaps.pro/maps/api/place/details/json?place_id=${item.place_id}&key=AlzaSyiiV2_A9cr7d7jCOvGIqIJJh94acsfgrCc`)
//       .then(response => response.json())
//       .then(data => {
//         const location = data.result.geometry.location;
//         if (location) {
//           setPlacesDetailsLL(location);
//         }
//       })
//       .catch(err => console.log(err));
//   };

//   const singlePlace = () => {
//     if (placesDetailsLL) {
//       setRegion({
//         latitude: placesDetailsLL.lat,
//         longitude: placesDetailsLL.lng,
//         latitudeDelta: 0.001,
//         longitudeDelta: 0.001,
//       });
//     }
//   };

//   return (
//     <View style={styles.containera}>
//       <TextInput
//         style={styles.input}
//         onChangeText={setSearch}
//         value={Search}
//         placeholder="Search.."
//       />
//       <TouchableOpacity style={styles.button} onPress={searchPlacesDescFunc}>
//         <Text>Search</Text>
//       </TouchableOpacity>

//       {placesDetailsDesc && (
//         <FlatList
//           data={placesDetailsDesc}
//           renderItem={({ item }: { item: { description: string } }) => (
//             <View style={styles.conChild}>
//               <Text
//                 onPress={() => {
//                   searchPlacesllFunc(item);
//                   singlePlace();
//                 }}
//                 style={styles.conText}
//               >
//                 {item.description}
//               </Text>
//             </View>
//           )}
//           keyExtractor={(item: { place_id: string }) => item.place_id}
//         />
//       )}

    
//         <MapView
//           region={region}
//           onRegionChangeComplete={setRegion}
//           style={styles.map}
//         >
//           <Marker
//             coordinate={{
//               latitude: location.coords.latitude,
//               longitude: location.coords.longitude,
//             }}
//           />
//           {placesDetailsLL && (
//             <Marker
//               coordinate={{
//                 latitude: placesDetailsLL.lat,
//                 longitude: placesDetailsLL.lng,
//               }}
//             />
//           )}
//           {placesDetailsLL && (
//             <Polyline
//               coordinates={[
//                 { latitude: location.coords.latitude, longitude: location.coords.longitude },
//                 { latitude: placesDetailsLL.lat, longitude: placesDetailsLL.lng },
//               ]}
//             />
//           )}
//         </MapView>
   
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   containera: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '48%',
//   },
//   input: {
//     height: 60,
//     margin: 22,
//     borderWidth: 1.5,
//     borderRadius: 20,
//     padding: 10,
//     borderColor: 'green',
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 13,
//     marginTop: 0,
//     borderRadius: 20,
//     marginHorizontal: 100,
//   },
//   conChild: {
//     height: 'auto',
//     marginHorizontal: 10,
//     borderWidth: 2,
//     marginTop: 20,
//     borderRadius: 7,
//     opacity: 0.5,
//   },
//   conText: {
//     fontSize: 15,
//     letterSpacing: 2,
//   },
// });
