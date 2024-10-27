import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);

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

  return (

    <View style={styles.containera}>
      <MapView style={styles.map} 
      initialRegion={{
       latitude: location.coords.latitude,
        longitude:location.coords.longitude,
        latitudeDelta:0.001,
        longitudeDelta:0.002,
      }}
        >
          
          <Marker coordinate={{
            latitude:location.coords.latitude,
            longitude:location.coords.longitude,
            
          }}></Marker>
          </MapView>
    </View>
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
});