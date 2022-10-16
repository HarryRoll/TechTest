import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import React from 'react'

export default function Header() {
  return (
    <View style={styles.header} >
        <Text style={styles.textHeader}>
            Juna Restaurant
        </Text>
        <TouchableOpacity style={styles.cart}>
            <Text>
                Cart
            </Text>
        </TouchableOpacity>
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
