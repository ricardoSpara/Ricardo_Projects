import React, { Component } from 'react';
import {View,Text,Button,AppRegistry,StyleSheet,Image,TouchableOpacity} from 'react-native';


class Icone extends Component{
    render(){
      //this.props.escolha
      //this.props.jogador
      if(this.props.escolha=='pedra'){

        return(
            <View style={txtJogador}>
            <Text>{this.props.jogador}</Text>
            <Image source={require('../../imgs/pedra.png')} />
           </View>
        );
      }
      else if(this.props.escolha=='papel'){
        
        return(
          <View style={txtJogador}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('../../imgs/papel.png')} />
         </View>
      );
      }
      else if(this.props.escolha=='tesoura'){

        return(
          <View style={txtJogador}>
          <Text>{this.props.jogador}</Text>
          <Image source={require('../../imgs/tesoura.png')} />
         </View>
      );
      }
      else{
        return false;
      }
    }
}

const Estilos={
    txtJogador:{
        alignItems:'center'
      }

};
const {txtJogador}=Estilos;
export default Icone;