import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image, Modal, TextInput, Alert, Button} from "react-native";
import React,{useState} from "react";
function Menu() {

    const [modalOrderVisible, setModalOrderVisible] = useState(false)
    const [propsMenu,setPropsMenu] = useState({})
    const [qty,setQty] = useState(0)
    const [order,setOrder] = useState([])

    const inputCart = (value) => {
        if(value.qty===0){Alert.alert("cant zero order")}
        else
        {
            order.push(value)
            setModalOrderVisible(false)
            setQty(0)
            Alert.alert("Your order has been added to the cart")
        }
        console.log(order)
    }
    const onPress = (MenuProps) => {
        setModalOrderVisible(true);
        setPropsMenu(MenuProps)
        console.log(MenuProps)
      };
    
    const onModalCancel = () => {
        setModalOrderVisible(false),
        setQty(0)
    }
    
    const onMin = () => {
        if(qty==0){Alert.alert('cannot be less than 0..!! please input the relevant amount')}
        else{
        setQty(Number(qty)-1)}
    }
    const foodArr = [{
        img : 1,
        foodName : 'nasi Goreng',
        price : 15001
    },{
        img : 2,
        foodName : 'nasi Goreng Kambing',
        price : 15002
    },{
        img : 3,
        foodName : 'nasi Goreng Udang',
        price : 15003
    },{
        img : 4,
        foodName : 'nasi Goreng Pedas',
        price : 15004
    },]

    const drinkArr = [{
        img : 1,
        drinkName : 'Teh manis',
        price : 15001
    },{
        img : 2,
        drinkName : 'Teh Tidak Manis',
        price : 15002
    },{
        img : 3,
        drinkName : 'Teh manis Dingin',
        price : 15003
    },{
        img : 4,
        drinkName : 'Teh manis panas',
        price : 15004
    },]

  return (
   <View style={styles.container}>
    
    
    <Modal
    visible={modalOrderVisible}
    transparent={true}
    >
    <View style={{justifyContent:'center', flex:1, padding:15}}>   
        <View style={{height:'70%', backgroundColor:'#fff',  elevation : 10, borderRadius:10}}>
            <View style={{height:40, backgroundColor:'#61dafb', justifyContent:'center', alignItems:"center"}}>
                <Text style={{color:'white'}}>
                    Order
                </Text>
            </View>
                <Text>{propsMenu.chooseIMG}</Text>
                <Text>{propsMenu.chooseNM}</Text>
                <Text>RP.{propsMenu.choosePR}</Text>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>onMin()}>
                <Text style={{color:'white',padding:5,backgroundColor:'blue',width:25}}>-</Text>
            </TouchableOpacity>
                <TextInput
                    style={{height: 40}}
                    onChangeText={newText => setQty(newText)}
                    defaultValue={qty.toString()}
                />
            <TouchableOpacity onPress={()=>setQty(Number(qty)+1)}>
                <Text style={{color:'white',padding:5,backgroundColor:'blue',width:25}}>+</Text>
            </TouchableOpacity>    
            </View>

            <Text>
                Rp. {qty*propsMenu.choosePR}
            </Text>

            <TouchableOpacity onPress={()=>inputCart({
                img : propsMenu.chooseIMG, 
                menuName : propsMenu.chooseNM,
                Price : propsMenu.choosePR,
                qty : qty,
                Total : qty*propsMenu.choosePR
                })}>
                <Text style={{backgroundColor:'green',color:'white',padding:10,width:'20%',borderRadius:5}}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onModalCancel()}>
                <Text style={{backgroundColor:'red',color:'white',padding:10,width:'20%',borderRadius:5}}>Cancel</Text>
            </TouchableOpacity>
        </View>
    </View>
    </Modal>   
        
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
                        <TouchableOpacity onPress={()=>onPress({
                                        chooseIMG:item.img,
                                        chooseNM : item.foodName,
                                        choosePR : item.price
                                        })}>
                                <View style={styles.menu}>
                                <Image source={require('./img/1.jpg')} style={{height:'55%', width:'100%', resizeMode:'cover'}}/>
                                    <Text>
                                        {item.foodName}   
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
                            <TouchableOpacity onPress={()=>onPress({
                                        chooseIMG:item.img,
                                        chooseNM : item.drinkName,
                                        choosePR : item.price
                                        })}>                   
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
