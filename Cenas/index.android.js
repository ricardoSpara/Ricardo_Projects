
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

//importar o componente barra de navegação
//import BarraNavegacao from './src/components/barraNavegacao';
import CenaPrincipal from './src/components/cenaPrincipal';
import CenaClientes from './src/components/cenaClientes';
import CenaContato from './src/components/cenaContatos';
import CenaEmpresa from './src/components/cenaEmpresa';
import CenaServicos from './src/components/cenaServicos';


                  /*
                      COMO FUNCIONA O NAVIGATOR
                      
                      --CenaPricipal -> id:'a'
                      --CenaClientes -> id:'b'

                      route tem prop id.

                      função push e pop
                      push: iseri um valor no topo
                      pop: tira um valor do topo

                      
                      --
                  */ 

class Cenas extends Component{

  render(){
    return(
      
      <Navigator
          initialRoute={{id: 'a'}}
          renderScene={(route,navigator)=>{
            //definir a cena com base na rota
            if(route.id==='a'){
                return(
                  <CenaPrincipal nav={navigator}/>
                );
            }
            if(route.id==='b'){
              return(
                <CenaClientes nav={navigator}/>
              );
            }
            if(route.id==='c'){
              return(
                <CenaContato nav={navigator}/>
              );
            }
            if(route.id==='d'){
              return(
                <CenaEmpresa nav={navigator}/>
              );
            }
            if(route.id==='e'){
              return(
                <CenaServicos nav={navigator}/>
              );
            }
          }}
      />
    );
  }

}

AppRegistry.registerComponent('Cenas', () => Cenas);
