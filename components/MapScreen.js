// // // MapScreen.js
// // // import React from 'react';
// // // import { View, Text } from 'react-native';

// // // const MapScreen = () => {
// // //   return (
// // //     <View>
// // //       <Text>Map Screen</Text>
// // //     </View>
// // //   );
// // // };

// // // export default MapScreen;

// // // import React from 'react';
// // // import { View, StyleSheet } from 'react-native';
// // // import { LeafletView } from 'react-native-leaflet-view';

// // // const MapScreen = () => {
// // //   return (
// // //     <View style={styles.container}>
// // //       <LeafletView
// // //         // Other props according to your requirements
// // //         style={styles.map}
// // //       />
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //   },
// // //   map: {
// // //     flex: 1,
// // //   },
// // // });

// // // export default MapScreen;

// // import React from 'react';
// // import { View, StyleSheet } from 'react-native';
// // import { LeafletView,  } from 'react-native-leaflet-view';
// // import { WebView } from 'react-native-webview';

// // // import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// // import { MapContainer } from 'react-leaflet/MapContainer'
// // import { TileLayer } from 'react-leaflet/TileLayer'
// // import { useMap } from 'react-leaflet/hooks'



// // const MapScreen = () => {
// //   // const mapLayers = [
// //   //   {
// //   //     type: 'tile',
// //   //     url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
// //   //     tileSize: 256,
// //   //     maxZoom: 19,
// //   //   },
// //   // ];

// //   return (
// //      <View style={styles.container}>
// //       {/* <LeafletView
// //         mapLayers={mapLayers} // Pass the mapLayers prop to the LeafletView component
// //         style={styles.map}
// //       />
 
// // {/* <WebView
// //       source={{ html: LEAFLET_HTML_SOURCE() }}
// //     />  

// // <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} /> */}
// // {/* //     <MapContainer center={[48.8566, 2.3522]} zoom={13}>

// // // <TileLayer
// // //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// // //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // //       />

// // //       </MapContainer>
// // //    */}

// //       <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
// //   <TileLayer
// //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //   />
// // </MapContainer>

// // </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   map: {
// //     flex: 1,
// //   },
// // });

// // export default MapScreen;
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import MapView from 'react-native-maps';

// const MapScreen = () => {
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 48.8566,
//           longitude: 2.3522,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         {/* Add map markers, polygons, or other map elements here */}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapScreen;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LeafletView } from 'react-native-leaflet-view';

const MapScreen = () => {
  const mapLayers = [
    {
      type: 'tile',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      tileSize: 256,
      maxZoom: 19,
    },
  ];

  return (
    <View style={styles.container}>
      <LeafletView
      style={{width:100, height:100 }}
        mapLayers={mapLayers} // Pass the mapLayers prop to the LeafletView component
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width:100,
    height:100
  },
});

export default MapScreen;
