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



const imgEmail=require('../imgs/detalhe_contato.png');


class CenaContatos extends Component{
    render(){
        return(
        <View style={style.vPrincipal}>

                <StatusBar
                    //hidden={true} // true ou false
                    backgroundColor='#61BD8C'
                />

                <BarraNavegacao voltar cor={"#61BD8C"} nav={this.props.nav}></BarraNavegacao>
                <View style={style.vim1}>
                    <Image source={imgEmail}/>
                    <Text style={style.txtC}>Contatos</Text>
                </View>
                <View style={style.vim2}>
                    <Text style={style.txtCliente}>TEL (14)99387703 </Text>
                    <Text style={style.txtCliente}>TEL (14)98289404 </Text>
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
       // marginLeft:20,
        //flexDirection:'row'

    },
    txtC:{
        //textAlign:'center',
        fontSize:25,
        color:'#61BD8C',
        marginLeft:10
        
    },
    txtCliente:{
        fontSize:17,
        marginLeft:20

    }
    

})


export default CenaContatos;
