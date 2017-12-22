import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  View
} from 'react-native';

import BarraNavegacao from '../components/barraNavegacao';



const imgEmail=require('../imgs/detalhe_empresa.png');


class CenaEmpresa extends Component{
    render(){
        return(
        <View style={style.vPrincipal}>

                <StatusBar
                    //hidden={true} // true ou false
                    backgroundColor='#EC7148'
                />

                <BarraNavegacao voltar cor={"#EC7148"} nav={this.props.nav}></BarraNavegacao>
                <View style={style.vim1}>
                    <Image source={imgEmail}/>
                    <Text style={style.txtC}>A Empresa</Text>
                </View>
                <View style={style.vim2}>
                    <Text style={style.txtEmpresa}>Ricardo.Corp: criada apenas para estudo, sempre visando o conhecimento </Text>       
                </View>
                
      </View>
       );
       
    }
}

const style = StyleSheet.create({

    vPrincipal:{
       flex: 1,
       backgroundColor:'white'
    },
    vim1:{
        marginTop: 15,
        flexDirection: 'row',
       // backgroundColor:'blue',
        alignItems: 'center',
       //justifyContent: 'center',
        marginHorizontal:10,
        //padding: 20
        
    },
    vim2:{
        marginTop:10,
        marginHorizontal:20,
        flex:1,
        //backgroundColor:'silver',
       // marginLeft:20,
        //flexDirection:'row'

    },
    txtC:{
        //textAlign:'center',
        fontSize:25,
        color:'#EC7148',
        marginLeft:10
        
    },
    txtEmpresa:{
        //flex:1,
        fontSize:15,
        //marginHorizontal:20

    }
    

})


export default CenaEmpresa;
