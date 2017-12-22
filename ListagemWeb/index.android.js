import React,{Component} from 'react';
import{
  Text,
  View,
  AppRegistry,
  StyleSheet
} from 'react-native';

import Itens from './src/components/itens';
import ListaItens from './src/components/listaItens';

class App extends Component{
  render(){
    return(
      <View>
        <ListaItens></ListaItens> 
      </View>
    );
  }
}

AppRegistry.registerComponent('ListagemWeb',()=> App);