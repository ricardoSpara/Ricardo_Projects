import React,{Component} from 'react';
import{
  Text,
  Image,
  View,
  AppRegistry,
  StyleSheet
} from 'react-native';

class Itens extends Component{

  render(){  
     return(
           <View style={style.vPrincipal}>
              <View style={style.vJunta}>
                <View style={style.vImg}>
                    <Image style={{height:100,width:100}} source={{uri: this.props.item.foto}} />
                </View>
                <View style={style.vDados}>
                    <Text style={style.textoTitulo}>{this.props.item.titulo}</Text>
                    <Text style={style.textoValor}>R$ {this.props.item.valor}</Text>
                    <Text style={style.texto}>{this.props.item.local_anuncio}</Text>
                    <Text style={style.texto}>Data Publicação:  {this.props.item.data_publicacao}</Text>        
                </View>
              </View>   
           </View>
     );
    }

}

const style = StyleSheet.create(
  {
    vPrincipal:{
      backgroundColor: 'skyblue',
      padding:10,
    },
    vJunta:{
      borderRadius:6,
      borderWidth:0.5,
      borderColor: 'black',
      flexDirection: 'row',
      padding:10,
      alignItems: 'center',
      //justifyContent:'center',
      backgroundColor: 'white'
    },
    vImg:{},
    vDados:{
      flex:1,
      marginLeft:15,
      marginBottom:5
     
    },
    texto:{
      //fontSize:18,
      color: 'black'
    },
    textoTitulo:{
      fontSize:18,
      color: 'skyblue'
    },
    textoValor:{
      fontSize:16,
      //fontWeigth: 'bold'

    },


  }
);


export default Itens;