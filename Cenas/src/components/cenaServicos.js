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



const imgServicos=require('../imgs/detalhe_servico.png');


class CenaServicos extends Component{
    render(){
        return(
        <View style={style.vPrincipal}>

                <StatusBar
                    //hidden={true} // true ou false
                    backgroundColor='#19C1D8'
                />

                <BarraNavegacao voltar cor={"#19C1D8"} nav={this.props.nav}></BarraNavegacao>
                <View style={style.vim1}>
                    <Image source={imgServicos}/>
                    <Text style={style.txtC}>Nossos Servicos</Text>
                </View>
                <View style={style.vim2}>
                    <Text style={style.txtCliente}>-Consultoria</Text>
                    <Text style={style.txtCliente}>-Processos</Text>
                    <Text style={style.txtCliente}>-Acompanhamento de projeto</Text>
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
        color:'#19D1C8',
        marginLeft:10
        
    },
    txtCliente:{
        fontSize:17,
        marginLeft:20

    }
    

})


export default CenaServicos;
