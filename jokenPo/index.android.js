import React, { Component } from 'react';
import {View,Text,Button,AppRegistry,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';
const Estilos={
  Principal:{
    flex:1,
    backgroundColor: 'skyblue',
    //flexDirection:'row'

  },
  texto:{
    fontSize: 22,
    color: 'blue',
    
    
  },
  imagem:{
  },
  vwTopo:{
    //flex:1,
  },
  vwCentro:{
   flex:1,
   //backgroundColor:'white',
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginHorizontal: 10,
   marginTop: 10,
   alignItems: 'center'
  },
  vwBaixo:{
    flex:2,
    alignItems: 'center',
   // backgroundColor:'white'
     
  },
  txtResultado:{
    fontSize: 25,
    color: 'red',
    marginBottom: 25
    //fontWeigth: 'bold'

  },
  vwX:{
    flexDirection:'row',
    alignItems:'center'
  },
  

};

const style=StyleSheet.create({
  btn:{
    width:90
  }

});




const {Principal,imagem,txtJogador,vwTopo,vwCentro,vwX,vwBaixo,botao,txtResultado}=Estilos;

class App3 extends Component{

  

  constructor(props){
    super(props);
    this.state={escolhaUser : '',escolhaComputador: '',resultado: ''};
  }

  jokenPo(escolhaUsuario){
    var escolha=escolhaUsuario;
    //alert(escolha);
    //geraNumAleatorio
    var numAlet=Math.floor( Math.random() * 3);
    //alert(numAlet);

    var escolhaComputador='';
    var resp='';

    switch (numAlet) {
      case 0: escolhaComputador='pedra'; break;
      case 1: escolhaComputador='papel'; break;
      case 2: escolhaComputador='tesoura'; break;
        
      default:
        break;
    }
    if(escolhaComputador =='pedra'){
      if(escolhaUsuario =='pedra'){
        resp='empate';
      }
      else if(escolhaUsuario=='tesoura'){
        resp='computador venceu';

      }else if(escolhaUsuario=='papel'){
        resp='o usuario venceu';
      }

    }
    else if(escolhaComputador =='papel'){
      if(escolhaUsuario =='papel'){
        resp='empate';
      }
      else if(escolhaUsuario=='pedra'){
        resp='computador venceu';

      }else if(escolhaUsuario=='tesoura'){
        resp='o usuario venceu';
      }

    }
    if(escolhaComputador =='tesoura'){
      if(escolhaUsuario =='tesoura'){
        resp='empate';
      }
      else if(escolhaUsuario=='papel'){
        resp='computador venceu';

      }else if(escolhaUsuario=='pedra'){
        resp='o usuario venceu';
      }

    }
   

    this.setState({escolhaUser: escolha,escolhaComputador: escolhaComputador,resultado: resp});

  }

  render(){
    return(
      <View style={Principal}>
        <Topo style={vwTopo}></Topo>
        
        <View style={vwCentro}>
         <View style={style.btn}>
         <Button title='Pedra'  onPress={ () => {this.jokenPo('pedra')}}/>

         </View>
         <View style={style.btn}>
         <Button title='Papel' onPress={ () => {this.jokenPo('papel')}}/>

         </View>
         <View style={style.btn}>
         <Button title='Tesoura' onPress={ () => {this.jokenPo('tesoura')}}/>

         </View>
        </View>
        <View style={vwBaixo}>
        
        <Text style={txtResultado}> {this.state.resultado}</Text>
        <View style={vwX}>
        <Icone escolha={this.state.escolhaUser} jogador={'usuario'}></Icone>
        <Text style={{fontSize:30}}>  </Text>
        <Icone escolha={this.state.escolhaComputador} jogador={'computador'}></Icone>
        </View>

        </View>
        
        
      </View>
    );
  }
}
 


AppRegistry.registerComponent('jokenPo', ()=> App3);