import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

function Menu() {
  return (
   <View style={styles.container}>
        <View style={styles.menus}>
            <Text>
                Food
            </Text>
                <View style={styles.menuContent}>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity onPress={()=>console.log("beli")}>
                            <View style={styles.menu}>
                                <Text>
                                Gambar    
                                </Text>
                                <Text>
                                Nama    
                                </Text>
                                <Text>
                                Harga   
                                </Text>
                            </View>       
                        </TouchableOpacity>
                        <View style={styles.menu}>
                            <Text>
                            Gambar    
                            </Text>
                            <Text>
                            Nama    
                            </Text>
                            <Text>
                            Harga   
                            </Text>
                        </View>
                        <View style={styles.menu}>
                            <Text>
                            Gambar    
                            </Text>
                            <Text>
                            Nama    
                            </Text>
                            <Text>
                            Harga   
                            </Text>
                        </View>
                        <View style={styles.menu}>
                            <Text>
                            Gambar    
                            </Text>
                            <Text>
                            Nama    
                            </Text>
                            <Text>
                            Harga   
                            </Text>
                        </View>
                        <View style={styles.menu}>
                            <Text>
                            Gambar    
                            </Text>
                            <Text>
                            Nama    
                            </Text>
                            <Text>
                            Harga   
                            </Text>
                        </View>
                        <View style={styles.menu}>
                            <Text>
                            Gambar    
                            </Text>
                            <Text>
                            Nama    
                            </Text>
                            <Text>
                            Harga   
                            </Text>
                        </View>
                    </ScrollView>    
                </View>    
        </View>
        <View style={styles.menus}>
            <Text>
                Drink
            </Text>
                <View style={styles.menuContent}>
                <ScrollView horizontal={true}>
                <TouchableOpacity onPress={()=>console.log("beli")}>
                            <View style={styles.menu}>
                                <Text>
                                Gambar    
                                </Text>
                                <Text>
                                Nama    
                                </Text>
                                <Text>
                                Harga   
                                </Text>
                            </View>       
                        </TouchableOpacity>
                    <View style={styles.menu}>
                        <Text>
                        Gambar    
                        </Text>
                        <Text>
                        Nama    
                        </Text>
                        <Text>
                        Harga   
                        </Text>
                    </View>
                    <View style={styles.menu}>
                        <Text>
                        Gambar    
                        </Text>
                        <Text>
                        Nama    
                        </Text>
                        <Text>
                        Harga   
                        </Text>
                    </View>
                    <View style={styles.menu}>
                        <Text>
                        Gambar    
                        </Text>
                        <Text>
                        Nama    
                        </Text>
                        <Text>
                        Harga   
                        </Text>
                    </View>
                    <View style={styles.menu}>
                        <Text>
                        Gambar    
                        </Text>
                        <Text>
                        Nama    
                        </Text>
                        <Text>
                        Harga   
                        </Text>
                    </View>
                    </ScrollView>    
                </View>
        </View>
   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex : 1
    },
    menus: {
        flex : 1,
        backgroundColor: '#fff',
        paddingHorizontal:15,
        paddingTop:15,
        paddingBottom :20,
        margin: 10,
        elevation : 10,
    },
    menuContent : {
        flex : 1,
        width: "100%",
        backgroundColor: '#fff',
        padding : 10,
        elevation : 5,
        borderRadius :10,
        marginTop : 5,
        overflow : 'hidden',
        flexDirection : 'row',
    },
    menu : {
        height : 150,
        width : 120,
        backgroundColor : 'red',
        margin : 5,
    },
})


export default Menu
