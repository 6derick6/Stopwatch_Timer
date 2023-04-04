import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {

  console.disableYellowBox = true;
  const [segundos,setarSegundos] = useState(0);
  const [minutos,setarMinutos] = useState(0);

  const [alarmSound,setarAlarmSound] = useState([
    {
      selecionado: true,
      som:'alarme 1',
      file: 'alarme1.mp3'
    },

    {
      selecionado: false,
      som:'alarme 2',
      file: 'alarme2.mp3'
    },
  ]);

  var numeros = [];
  for(var i = 1; i<=60; i++){
    numeros.push(i);
  }

  return (
    <View style={styles.container}>
      <Text style={{color:'white',fontSize:30}}>Selecione o seu tempo:</Text>
      <View style={{flexDirection:'row'}}>
        <Text style={{color:'white'}}>Min: </Text>
        <Picker 
        selectedValue={minutos}
        onValueChange={(itemValue, itemIndex) => setarMinutos(itemValue)}
        style={{ height: 50, width: 100, color:'white' }}>
          {
          numeros.map(function(val){
            return(<Picker.Item label={val.toString()} value={val.toString()} />);
          })
          }
        </Picker>

        <Text style={{color:'white'}}>Seg: </Text>  
        <Picker 
        selectedValue={segundos}
        onValueChange={(itemValue, itemIndex) => setarSegundos(itemValue)}
        style={{ height: 50, width: 100, color: 'white' }}>
          <Picker.Item label='0' value='0' />
          {
          numeros.map(function(val){
            return(<Picker.Item label={val.toString()} value={val.toString()} />);
          })
          }
        </Picker>
        <StatusBar style="auto" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(65,105,225)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
