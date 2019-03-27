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
  View} 
  from 'react-native';


type Props = {};
export default class App extends Component<Props> {

  constructor)(props){
    super(props)
    this.states = {altura:0, peso:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.endradas}>
          <TextInput palceholder="Altura ex: 1.73" keyboardType="numeric" style={styles.input}/>
          <TextInput palceholder="Peso ex: 90" keyboardType="numeric" style={styles.input}/>
       </View>
         <TouchableOpacity style={style.button} onPress={()=>{}}><Text style={styles.buttonText}>Calcular</Text> </TouchableOpacity>
         <Text style={styles.resultado}>30</Text>
         <Text style={(styles.resultado, {fontSize:35})}>Calcular</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  entradas:{
    flexDirection: "row",
  },
  input:{
    heigth: 70,
    textAlign: "center",
    width: "50%",
    fontSize: 40,
    marginTop: 20,
  },
  button:{
    backgroundColor: "#89ffa5"
  },
  buttonText:{
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#6dc4a4",
    fontWeigth: "bold",
  },
  resultado:{
    alignSelf: "center",
    color: "ligthgray",
    fontSize:65,
    padding: 15,
  }
  
});
