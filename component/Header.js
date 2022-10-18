import { Text, View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import React,{useState} from 'react'


export default function Header(props) {
  return (
    <View style={styles.header} >
        <Text style={styles.textHeader}>
           {props.logo}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header : {
        backgroundColor : '#61dafb',
        paddingVertical : 15,
        paddingHorizontal : 15,
    },
    textHeader : {
        color : 'white',
        fontSize : 20,
    },
    cart : {
        alignItems: 'flex-end'
    }
})
