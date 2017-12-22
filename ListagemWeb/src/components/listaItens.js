import React,{Component} from 'react';
import{
  Text,
  View,
  AppRegistry,
  ScrollView,
  StyleSheet
} from 'react-native';

import axios from 'axios';
import Itens from './itens';


class ListaItens extends Component{

  constructor(props){
    super(props);
    this.state= { ListaItens: [] };
  }

  componentWillMount() {
    //requisição HTTP
    // http://faus.com.br/recursos/c/dmairr/api/itens.html
    //respose é o retorno dos dados

    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then(response => { this.setState({ ListaItens: response.data}); })
    .catch(() => {console.log('deu ruim'); });  
  }

  render(){
      return(  
        <ScrollView>

        { this.state.ListaItens.map( (item)=> (<Itens key={item.titulo} item={item}/>) )} 

        </ScrollView>
         
      );
  }
 

}

export default ListaItens;