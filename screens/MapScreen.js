import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import Icon                 from 'react-native-vector-icons/SimpleLineIcons'

class MapScreen extends Component {
   static navigationOptions = ({ navigation }) => ({
     tabBarIcon: ({ tintColor }) => {
        return <Icon name="map" size={25} color={tintColor} />;
      }
    });
render () {
    return (
      <MapView
        style={{flex:1}}
        initialRegion={{
          latitude: 40.7230,
          longitude: -74.0006,
          latitudeDelta: 0.001,
          longitudeDelta: 0.01,
        }}
      >
      <MapView.Circle
        radius= {200}
        fillColor="rgba(0, 255, 0, 0.3)"
        strokeColor="green"
        center={{ latitude: 40.757966, longitude: -73.847704 } }
       />
       <MapView.Circle
        radius= {800}
        fillColor="rgba(255, 255, 0, 0.3)"
        strokeColor="yellow"
        center={{ latitude: 40.8200, longitude: -73.9493 } }
       />
        <MapView.Circle
        radius= {800}
        fillColor="rgba(255, 0, 0, 0.3)"
        strokeColor="yellow"
        center={{ latitude: 40.7549, longitude: -73.9840 } }
       />
        <MapView.Circle
        radius= {800}
        fillColor="rgba(255, 0, 0, 0.3)"
        strokeColor="yellow"
        center={{ latitude: 40.76749693, longitude: -73.97582943 } }
       />
       <MapView.Circle
        radius= {800}
        fillColor="rgba(255, 255, 0, 0.3)"
        strokeColor="yellow"
        center={{ latitude: 40.7495461, longitude:  -73.9679163 } }
       />
        <MapView.Circle
        radius= {800}
        fillColor="rgba(255, 255, 0, 0.3)"
        strokeColor="yellow"
        center={{ latitude: 40.7411, longitude:  -73.9897 } }
       />
        <MapView.Circle
        radius= {300}
        fillColor="rgba(255, 255, 0, 0.3)"
        strokeColor="yellow"
        center={{ latitude: 40.7505, longitude:  -73.9934 } }
       />
        <MapView.Circle
        radius= {500}
        fillColor="rgba(0, 255, 0, 0.3)"
        strokeColor="yellow"
        center={{ latitude: 40.7681, longitude:  -73.9944 } }
       />

         <MapView.Polygon
          coordinates={[
            { latitude: 40.8200, longitude: -73.9493 },
            { latitude: 40.8204, longitude: -73.9232 },
            { latitude: 40.8250, longitude: -73.9233 },
            { latitude: 40.8253, longitude: -73.9443 }
          ]}
          fillColor="rgba(0, 255, 0, 0.3)"
          strokeColor="orange"
          strokeWidth={2}
        />
         <MapView.Polygon
          coordinates={[
            { latitude: 40.8200, longitude: -73.9493 },
            { latitude: 40.8204, longitude: -73.9232 },
            { latitude: 40.8250, longitude: -73.9233 },
            { latitude: 40.8253, longitude: -73.9443 }
          ]}
          fillColor="rgba(255, 0, 0, 0.3)"
          strokeColor="orange"
          strokeWidth={2}
        />
        <MapView.Polygon
          coordinates={[
            { latitude: 40.723434, longitude: -73.847704 },
            { latitude: 40.725433, longitude: -73.845129 },
            { latitude: 40.72534, longitude: -73.244227 },
            { latitude: 40.725121, longitude: -73.246266 }
          ]}
          fillColor="rgba(255, 0, 0, 0.3)"
          strokeColor="orange"
          strokeWidth={2}
        />
         <MapView.Polygon
          coordinates={[
            { latitude: 40.7250, longitude: -74.0046 },
            { latitude: 40.7245, longitude: -74.0086 },
            { latitude: 40.7254, longitude: -74.0036},
            { latitude: 40.7365, longitude: -74.0039 }
          ]}
          fillColor="rgba(255, 0, 0, 0.3)"
          strokeColor="orange"
          strokeWidth={2}
        />
        <MapView.Marker
          title="Citi Field"
          description="center field"
          coordinate={{ latitude: 40.757405, longitude: -73.845815 }}
          pinColor="green"
        />
         <MapView.Marker
          title="Madison Square Garden"
          description="Madison Square Garden"
          coordinate={{ latitude: 40.7505, longitude: -73.9934 }}
          pinColor="yellow"
        />
          <MapView.Marker
          title="TD BANK"
          description="TD BANK"
          coordinate={{ latitude: 40.751942, longitude: -73.989479 }}
          pinColor="red"
        />
          <MapView.Marker
          title="JP MORGAN"
          description="JP MORGAN"
          coordinate={{ latitude:  40.752766, longitude: -73.989662 }}
          pinColor="red"
        />
           <MapView.Marker
          title="Space Ibiza"
          description="Space Ibiza"
          coordinate={{ latitude:  40.7668, longitude: -73.9962 }}
          pinColor="green"
        />
      </MapView>
    );
  }
}

export default MapScreen;