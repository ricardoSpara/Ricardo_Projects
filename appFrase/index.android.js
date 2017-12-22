import React from 'react';
import {View,Text,Image,TouchableOpacity,AppRegistry,Alert} from 'react-native';

const Estilos={
  Principal:{
    backgroundColor:'white',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    

  },
  imagem:{
    justifyContent:'center',
    alignItems:'center'
    
    
    

  },
  botao:{
    marginTop:20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor:'green',    
    borderColor:'white',
    borderWidth:1,
    borderRadius:10,
    

  },
  textoBotao:{
    //backgroundColor:'white',
    textAlign:'center',
    color:'white',
    fontSize:20,
    fontWeight: 'bold'
    
  },
  textoD:{
    //backgroundColor:'white',
    textAlign:'center',
    fontSize:20,
    fontWeight: 'bold',
    
    
  }
 
 
};

const geraFrase=()=>{
    //jeito de declarar array 'var array= Array();'
    var sort=Math.random();
    var vet=['sou zika','topper','deus é top','#infoComanda','#vetera 2017','respeita o pai','#segueobaile','sou pra casar','priemeiro app','uhu'] ;
    sort=Math.floor(sort*10); 
    //Alert. pra nao aparecer em cima escrito alert
    Alert.alert(vet[sort]);
    
  
  
}


const App = ()=>{
 const{Principal,imagem,textoBotao,botao,textoD}=Estilos;
  
return (
  <View style={Principal}>
  
    <Image style={imagem} source={require('./imgs/logo.png')}/>

    <TouchableOpacity onPress={geraFrase} style={botao}>
    
    <Text style={textoBotao}>Nova Frase</Text>

    </TouchableOpacity>

    
    

 </View>
 
);

};
/*
  metodo absoluto

  <Image
  source={{
    uri: 'https://facebook.github.io/react/logo-og.png',
    method: 'POST',
    headers: {
      Pragma: 'no-cache',
    },
    body: 'Your Body goes here',
  }}
  style={{width: 400, height: 400}}
/>



    */

AppRegistry.registerComponent('appFrase',()=> App);
