/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';



type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {altura:0, peso:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this) 
  }
   
  calcular(){
    let imc = this.state.peso / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc
    this.setState(s)

    if(s.resultado<16){
      s.resultadoText="Magreza Grave"
    }
    else if(s.resultado<17){
      s.resultadoText="Magreza Moderada"
    }
    else if(s.resultado<18.5){
      s.resultadoText="Magresa Leve"
    }
    else if(s.resultado<25){
      s.resultadoText="Peso Normal"
    }
    else if(s.resultado<30){
      s.resultadoText="Acima do Peso"
    }
    else if(s.resultado<35){
      s.resultadoText="Obesidade Grau 1"
    }
    else if(s.resultado<40){
      s.resultadoText="Obesidade Grau 2"
    }
    else if(s.resultado >= 40){
      s.resultadoText="Obesidade Grau 3"
    }



  }


  render() {
    return (
     
      <View style={styles.container}>
        <View style={styles.info}>
           <Text style={styles.nome} >github.com/RyerEduardo</Text>
         </View>
        
        <View style={styles.entradas}>
          <TextInput placeholder="Altura ex: 1.73" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput placeholder="Peso ex: 90" keyboardType="numeric" style={styles.input} onChangeText={(peso)=>{this.setState({peso})}}/>
       </View>
         <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
         <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
         <Text style={[styles.resultado, {fontSize:35} ]}>{this.state.resultadoText}</Text>
         
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  info:{
    flexDirection: 'row',
    
  },
  
  nome:{
    alignSelf: "center",
    color: "red",
    padding: 5,
    marginTop: "2%",
    marginBottom: "5%",
  },
  entradas:{
    flexDirection: 'row',
  },
  input:{
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 25,
    marginTop: 20,
  },
  button:{
    backgroundColor: "#89ffa5",
  },
  buttonText:{
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#6dc4a4",
    fontWeight: "bold",
  },
  resultado:{
    alignSelf: "center",
    color: "lightgray",
    fontSize:65,
    padding: 15,
  },
  
});
