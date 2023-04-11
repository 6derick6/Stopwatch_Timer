import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import Contador from './Contador';

export default function App() {

  console.disableYellowBox = true;
  const [estado,setarEstado] = useState('selecionar');
  const [segundos,setarSegundos] = useState(1);
  const [minutos,setarMinutos] = useState(0);

  const [alarmSound,setarAlarmSound] = useState([
    {
      id:1,
      selecionado: true,
      som:'alarme 1',
      file: 'alarme1.mp3'
    },

    {
      id:2,
      selecionado: false,
      som:'alarme 2',
      file: 'alarme2.mp3'
    },

    {
      id:3,
      selecionado: false,
      som:'alarme 3',
      file: 'alarme3.mp3'
    },
  ]);

  var numeros = [];
  for(var i = 1; i<=60; i++){
    numeros.push(i);
  }

  function setarAlarme(id){
    let alarmesTemp = alarmSound.map(function(val){
      if(id != val.id)
        val.selecionado = false;
      else
        val.selecionado = true;  
      return val;
    })

    setarAlarmSound(alarmesTemp);
  }

  if(estado == 'selecionar'){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <LinearGradient 
        colors={['rgba(6, 67, 196,1)', 'rgba(6, 67, 196,0.7)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height:'100%'
        }}
        />
        <Text style={{color:'white',fontSize:30}}>Selecione o seu tempo:</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'white',paddingTop:16}}>Min: </Text>
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

          <Text style={{color:'white',paddingTop:16}}>Seg: </Text>  
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
        </View>

        <View style={{flexDirection:'row'}}>
          {
          alarmSound.map(function(val){
            
            if(val.selecionado){
            return (
            
            <TouchableOpacity onPress={()=>setarAlarme(val.id)} style={styles.btnEscolherSelecionado}>
              <Text style={{color:'white'}}>{val.som}</Text>
              </TouchableOpacity>
            );
            }else{

              return (
            
                <TouchableOpacity onPress={()=>setarAlarme(val.id)} style={styles.btnEscolher}>
                  <Text style={{color:'white'}}>{val.som}</Text>
                  </TouchableOpacity>
                );

            }
          })
          
          }  
        </View>
            <TouchableOpacity onPress={()=>setarEstado('iniciar')} style={styles.btnIniciar}><Text style={{textAlign:'center',paddingTop:30,color:'white',fontSize:20}}>Iniciar</Text></TouchableOpacity>
      </View>
    );
  }else if(estado == 'iniciar'){
    return(
      <Contador setarEstado={setarEstado} minutos={minutos} segundos={segundos}></Contador>
    );
  }  
}

const styles = StyleSheet.create({
  btnIniciar:{
    backgroundColor:'rgb(95, 132, 212)',
    width:100,
    height:100,
    borderRadius:50,
    marginTop:30,
    borderColor:'white',
    borderWidth:2
  },

  container: {
    flex: 1,
    //backgroundColor: 'rgb(65,105,225)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnEscolher: {
    marginRight:10,
    padding:8,
    backgroundColor:'rgb(95, 132, 212)'
  },

  btnEscolherSelecionado: {
    marginRight:10,
    padding:8,
    backgroundColor:'rgb(95, 132, 212,0.3)',
    borderColor:'white',
    borderWidth:1
  },
});

