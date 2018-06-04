import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import {
  Container,
  Content,
  Header,
  Item,
  Icon,
  Input,
  Button
} from 'native-base';

import {
MaterialCommunityIcons
} from 'react-native-vector-icons/';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1, justifyContent:'space-between' }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                    });
                    }}>
                    <Icon name="ios-reverse-camera"
                        style={{ fontWeight: 'bold', marginBottom: 10, color: 'white' }}>
                    </Icon>
                </TouchableOpacity>
                
                <View style={{ 
                  flexDirection:'row', 
                  justifyContent:'space-between',
                  paddingHorizontal: 10,
                  marginBottom:15,
                  alignItems:'flex-end' }} >
                  <View style={{ alignItems:'center' }}>
                      <MaterialCommunityIcons  name= "circle-outline" 
                      style={{  color: 'white', fontSize :100 }} >
                      </MaterialCommunityIcons>
                  </View>
                </View>
            </View>
          </Camera>
        </View>
      );
    }
  }
}