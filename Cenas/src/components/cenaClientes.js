
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


const im1= require('../imgs/detalhe_cliente.png');
const im2 = require('../imgs/cliente1.png');
const im3 = require('../imgs/cliente2.png');
//const menuServico = require('../imgs/menu_servico.png'); 



class CenaClientes extends Component{
   

    render(){
        return(
        <View style={style.vPrincipal}>

                <StatusBar
                    //hidden={true} // true ou false
                    backgroundColor='#B9C941'
                />

                <BarraNavegacao voltar cor={"#B9C941"} nav={this.props.nav}></BarraNavegacao>

                <View style={style.vim1}>
                    <Image source={im1}/>
                    <Text style={style.txtC}>Nossos Clientes</Text>
                </View>
                <View style={style.vim2}>
                    <Image source={im2}/>
                    <Text style={style.txtCliente}>Ricardo Sparapan</Text>
                </View>
                <View style={style.vim3}>
                    <Image source={im3}/>
                    <Text style={style.txtCliente}>Zika Virus</Text>
                </View>

      </View>
        );
       
    }
}

const style = StyleSheet.create({

    vPrincipal:{
        //borderWidth:5,
        //borderColor:'black',
        //backgroundColor:'white'
        flex: 1,
        backgroundColor:'white'
    },
    vim1:{
        marginTop: 15,
       flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'center'
        marginLeft:10
        
    },
    vim2:{
        marginTop:20,
        marginLeft:30,
        //flexDirection:'row'

    },
    vim3:{
        marginTop:20,
        marginLeft:30,
        

    },
    txtC:{
        //textAlign:'center',
        fontSize:25,
        color:'#B9C941',
        marginLeft:10
        
    },
    txtCliente:{
        fontSize:17,
        marginLeft:20

    }
    

})


export default CenaClientes;
