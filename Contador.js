import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Contador(props) {

    return(

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

            <View style={{flexDirection:'row'}}>
                <Text style={styles.textContador}>{props.minutos} : </Text>
                <Text style={styles.textContador}>{props.segundos}</Text>
            </View>

            <TouchableOpacity onPress={()=>props.setarEstado('selecionar')} style={styles.btnIniciar}><Text style={{textAlign:'center',paddingTop:30,color:'white',fontSize:20}}>Resetar</Text></TouchableOpacity>

        </View>    

    );
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
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    textContador: {
        color:'white',
        fontSize:40
    }

});