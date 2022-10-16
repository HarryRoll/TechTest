import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from "react-native";

function Menu() {
    const foodArr = [{
        img : 1,
        foodName : 'nasi Goreng',
        price : 15000
    },{
        img : 2,
        foodName : 'nasi Goreng',
        price : 15000
    },{
        img : 3,
        foodName : 'nasi Goreng',
        price : 15000
    },{
        img : 4,
        foodName : 'nasi Goreng',
        price : 15000
    },]

    const drinkArr = [{
        img : 1,
        drinkName : 'Teh manis',
        price : 15000
    },{
        img : 2,
        drinkName : 'Teh manis',
        price : 15000
    },{
        img : 3,
        drinkName : 'Teh manis',
        price : 15000
    },{
        img : 4,
        drinkName : 'Teh manis',
        price : 15000
    },]

  return (
   <View style={styles.container}>
        <View style={styles.menus}>
            <Text>
                Food
            </Text>
                <View style={styles.menuContent}>
                <FlatList
                    data ={foodArr}
                    horizontal={true}
                    renderItem={({item})=>(
                    <ScrollView horizontal={true}>
                        <TouchableOpacity onPress={()=>console.log("beli")}>
                                <View style={styles.menu}>
                                <Image source={require('./img/1.jpg')} style={{height:'55%', width:'100%', resizeMode:'cover'}}/>
                                    <Text>
                                        {item.foodName}   
                                    </Text>
                                    <Text>
                                        {item.price}   
                                    </Text>
                                </View>              
                        </TouchableOpacity> 
                    </ScrollView>
                    )}/>     
                </View>    
        </View>
        <View style={styles.menus}>
            <Text>
                Drink
            </Text>
                <View style={styles.menuContent}>
                    <FlatList
                        data = {drinkArr}
                        horizontal = {true}
                        renderItem={({item})=>(    
                        <ScrollView horizontal={true}>
                            <TouchableOpacity onPress={()=>console.log("beli")}>                   
                                <View style={styles.menu}>
                                    <Image source={require(`./img/1.jpg`)} style={{height:'55%', width:'100%', resizeMode:'cover'}}/>                                    
                                    <Text>
                                        {item.drinkName}    
                                    </Text>
                                    <Text>
                                        Rp. {item.price}   
                                    </Text>
                                </View>       
                            </TouchableOpacity>
                        </ScrollView>    
                      )}/>  
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
    },
    menu : {
        height : 145,
        width : 120,
        backgroundColor : '#fff',
        margin : 5,
        padding:5,
        elevation : 5,
        borderRadius: 5 
    },
})


export default Menu
