import { Text, View, StyleSheet, TouchableOpacity, Modal } from "react-native";

import React,{useState} from 'react'

export default function Header(props) {
    const [modalCartVisible, setModalCartVisible] = useState(false)
  return (
    <View style={styles.header} >

<Modal
visible={modalCartVisible}
transparent={true}
>
<View style={{justifyContent:'center', flex:1, padding:15}}>   
    <View style={{height:'70%', backgroundColor:'#fff',  elevation : 10, borderRadius:10}}>
        <View style={{height:40, backgroundColor:'#61dafb', justifyContent:'center', alignItems:"center"}}>
            <Text style={{color:'white'}}>
                Keranjang
            </Text>
        </View>
        <Text>ini Cart</Text>
        <TouchableOpacity>
        <Text style={{backgroundColor:'green',color:'white',padding:10,width:'20%',borderRadius:5}}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setModalCartVisible(false)}>
            <Text style={{backgroundColor:'red',color:'white',padding:10,width:'20%',borderRadius:5}}>Cancel</Text>
        </TouchableOpacity>
    </View>
</View>
</Modal> 



        <Text style={styles.textHeader}>
           {props.logo}
        </Text>
        <TouchableOpacity 
            style={styles.cart}
            onPress={()=>setModalCartVisible(true)}
            >
            <Text>
                {props.cart}
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
