import React, { Component } from 'react';
import {View,Text,Button,AppRegistry,StyleSheet,Image,TouchableOpacity} from 'react-native';

class Topo extends Component{
    render(){
      return(
        <View >
        <Image source={require('../../imgs/jokenpo.png')} />
       </View>
      );  
    }
  }

  export default Topo;
  
