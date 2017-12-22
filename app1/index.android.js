var React = require('react');
// importação do modulo 'react' de um jeito diferente abaixo
//import react from 'react';


import {Text,View,Button,AppRegistry} from 'react-native';
// fazendo o inverso 
//var {Text,View,Button,AppRegistry}= require('react-native');



const geraNumero=()=>{ 
  var num=Math.random(100);
  num= Math.floor(num*10);
  alert(num);

};



const App = ()=>{
      
    return (
      <View>

        <Text>Gerador de Numeros Randomicos</Text>
        <Button 
         title="gerar Numero"
         onPress={geraNumero}
        />
         
        
      </View>
      
    );

};

AppRegistry.registerComponent('app1',()=> App);




