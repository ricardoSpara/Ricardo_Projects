
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const voltarimg = require('../imgs/btn_voltar.png');

class BarraNavegacao extends Component{
    render(){

            if(this.props.voltar){

                return(         
                    <View style={[style.barraTitulo, {backgroundColor:this.props.cor}]}>
                        <TouchableHighlight
                        underlayColor={this.props.cor}
                        activeOpacity={0.3}
                        onPress={()=>{
                                this.props.nav.pop();
                            }}>
                            <Image source={voltarimg}/>
                        </TouchableHighlight>
                        
                        <Text style={style.titulo}>ATM Consultoria</Text>
                    </View>
                );

            }

            return(         
                 <View style={style.barraTitulo}>
                     <Text style={style.titulo} >ATM Consultoria</Text>
                 </View>
             );
        
       
       
    }
}

const style= StyleSheet.create({
    barraTitulo:{
        flexDirection:'row',
        //fontSize: 20,
       backgroundColor: 'silver',
        padding: 10,
        height: 60,
        //justifyContent: 'center',
       // alignItems: 'center'

    },
    titulo:{
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        color: 'black'
    },

})

export default BarraNavegacao;
