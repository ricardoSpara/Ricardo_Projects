
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  View,
  TouchableHighlight
} from 'react-native';

import BarraNavegacao from '../components/barraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuContato = require('../imgs/menu_contato.png');
const menuServico = require('../imgs/menu_servico.png'); 



class CenaPrincipal extends Component{
   

    render(){
        return(
        <View style={style.vPricipal}>

                <StatusBar
                    //hidden={true} // true ou false
                    backgroundColor='silver'
                />
                
                
                <BarraNavegacao ></BarraNavegacao>
                <View style={style.vlogo}>
                    <Image  source={logo}/>
                </View>
                <View style={style.vjunta}>
                    <View style={style.vjuntaCC}>

                        <TouchableHighlight 
                        underlayColor={'#B9C941'}
                        activeOpacity={0.3}
                        onPress={()=>{
                            this.props.nav.push({id:'b'})}
                        }>
                            <Image style={style.imgMenu} source={menuCliente}/>
                        </TouchableHighlight>

                        <TouchableHighlight
                        underlayColor={'#61BD8C'}
                        activeOpacity={0.3}
                        onPress={()=>{
                            this.props.nav.push({id:'c'})}
                        }>
                            <Image style={style.imgMenu} source={menuContato}/>
                        </TouchableHighlight>

                    </View>
                    <View style={style.vjuntaES}>

                         <TouchableHighlight 
                         underlayColor={'#EC7148'}
                         activeOpacity={0.3}
                         onPress={()=>{
                            this.props.nav.push({id:'d'})}
                        }>
                            <Image style={style.imgMenu} source={menuEmpresa}/>
                        </TouchableHighlight>
                        

                        <TouchableHighlight 
                        underlayColor={'#19C1D8'}
                        activeOpacity={0.3}
                        onPress={()=>{
                            this.props.nav.push({id:'e'})
                        }}>
                             <Image style={style.imgMenu} source={menuServico}/>
                        </TouchableHighlight>
                        
                       
                    </View>
                    
                    
                </View>

      </View>
        );
       
    }
}

const style = StyleSheet.create({
    vjunta:{
        alignItems:'center'
        
    },
    vjuntaCC:{
        marginTop:10,
        flexDirection:'row'

    },
    vjuntaES:{
        marginTop:10,
        flexDirection:'row'

    },
    vlogo:{
        marginTop:30,
        alignItems: 'center',

    },
    imgMenu:{
        margin:15
    },
    vPricipal:{
        flex:1,
        backgroundColor:'white'
    }

})


export default CenaPrincipal;
