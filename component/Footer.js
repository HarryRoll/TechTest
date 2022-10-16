import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function Footer() {
  return (
    <View style={styles.container}>
        <View style={styles.addressCon}>
            <Text style={styles.address}>
                Address : jl. abc no.123
            </Text>
            <Text style={styles.address}>
                email : abc@mail.com
            </Text>
            <Text style={styles.address}>
                phone : 021 123123
            </Text>
        </View>
        <View style={styles.copy}>
            <Text style={styles.copyR}>
                copyright 2022
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#61dafb',
        padding:15
    },
    addressCon:{
        marginBottom:20,
    },
    address:{
        color : 'white',
    },
    
    copy : {
        alignItems: 'center',
    },
    copyR : {
        color : 'white',
        alignItems: 'center',
    }
  });
export default Footer
