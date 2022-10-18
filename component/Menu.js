import React,{useState,useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import menuApi from "../Api/menuApi";
import { Text,
        View,
        StyleSheet, 
        TouchableOpacity, 
        ScrollView, 
        FlatList, 
        Image, 
        Modal, 
        TextInput, 
        Alert, 
        Button} from "react-native";

function Menu() {

    const [modalOrderVisible, setModalOrderVisible] = useState(false)
    const [modalCartVisible, setModalCartVisible] = useState(false)
    const [propsMenu,setPropsMenu] = useState({})
    const [qty,setQty] = useState(0)
    const [table,setTable] = useState('')
    const [total,setTotal] = useState()
    const [checkOutData,setCheckOutData] = useState()
    const [foodArr,setFoodArr]= useState()
    const [drinkArr,setDrinkArr] = useState()
    const [order,setOrder] = useState([{
        img : '',
        menuName : '', 
        Price : 0,
        qty : 0,
        Total : 0
    },])

    const inputCart = (value) => {
        if(value.qty===0){Alert.alert("cant zero order")}
        else
        {
            if(order[0].img===''){
                setOrder([value])
                setModalOrderVisible(false)
                setQty(0)
                Alert.alert("Your order has been added to the cart")
            }else{
                order.push(value)
                setModalOrderVisible(false)
                setQty(0)
                Alert.alert("Your order has been added to the cart")}
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

    const cart = () => {
        setModalCartVisible(true)
 //       order.map(e => console.log(e.Price))
    }
    const checkOut = async () => {
        payload = {
            orderReport : order,
            tableNumber : table,
            total : total
        }
        await menuApi.createReportApi(payload).then(()=>{
        setOrder([{
            img : '',
            menuName : '', 
            Price : 0,
            qty : 0,
            Total : 0
        },])
        setTable('')
        setModalCartVisible(false)
        Alert.alert('Check Out Successfully')
    })
    }

    useEffect(()=>{
        let hasil = {...order.map(e=>e.Total)}
        let tot = 0
            for(let i = 0; i <order.length; i++){
            tot += hasil[i];
            }
            setTotal(tot)
        console.log(tot)
    },[modalCartVisible])
    useEffect(()=>{
        menuApi.foodMenu().then(data=>{
            setFoodArr(data)
        })
        menuApi.drinkMenu().then(data=>{
            setDrinkArr(data)
        })
    },[])

  return (
   <View style={styles.container}>
    <Modal
    visible={modalCartVisible}
    transparent={true}
    >
    <View style={{justifyContent:'center', flex:1, padding:15}}>   
        <View style={{height:'70%', backgroundColor:'#fff',  elevation : 10, borderRadius:10}}>
            <View style={{height:40, backgroundColor:'#61dafb', justifyContent:'center', alignItems:"center"}}>
                <Text style={{color:'white'}}>
                    Cart
                </Text>
            </View>
            <FlatList
                        data = {order}
                        renderItem={({item})=>(    
                        <ScrollView>               
                                <View style={{margin:5, padding:5, elevation : 1, flexDirection:'row'}}>                                  
                                    <View style={{flexDirection:'column', flex:1,marginRight : 10}}>
                                        <Image source={require(`./img/1.jpg`)} style={{height:'55%', width:'100%', marginRight : 10, resizeMode:'cover'}}/>
                                        <Text style={{}}>     
                                            {item.menuName} 
                                        </Text>
                                    </View>
                                    <View style={{flex:1, flexDirection:'column',marginRight : 10}}>
                                        <Text>Harga</Text>
                                        <Text style={{}}>
                                            Rp. {item.Price} 
                                        </Text>
                                    </View>
                                    <View style={{flex:1,marginRight : 10}}>
                                        <TextInput
                                        style={{height: 40, borderWidth: 1}}
                                        onChangeText={(e)=>item.qty=e}
                                        keyboardType='number-pad' 
                                        defaultValue={item.qty.toString()}
                                        />
                                        <Text style={{}}>
                                            Rp. {item.Price*item.qty}    
                                        </Text>
                                    </View>    
                                </View>       
                        </ScrollView>                          
                      )}/>
            <TextInput
                style={{height: 40, borderWidth: 1}}
                onChangeText={(e)=>setTable(e)}
                keyboardType='number-pad'
                placeholder="Table Number " 
                defaultValue={table}
                />
            <Text>Total Rp. {total}</Text>
            <TouchableOpacity onPress={()=>checkOut()}>
            <Text style={{backgroundColor:'green',color:'white',padding:10,width:'20%',borderRadius:5}}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setModalCartVisible(false)}>
                <Text style={{backgroundColor:'red',color:'white',padding:10,width:'20%',borderRadius:5}}>Cancel</Text>
            </TouchableOpacity>
        </View>
    </View>
    </Modal> 

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
                    style={{height: 40, borderWidth: 1}}
                    onChangeText={newText => setQty(newText)}
                    keyboardType='number-pad'
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
                                <Image source={require('./img/2.jpg')} style={{height:'55%', width:'100%', resizeMode:'cover'}}/>
                                    <Text>
                                        {item.foodname}   
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
                                        {item.drinkname}    
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
        <Button
    onPress={()=>cart()}
    title="Cart"
    />
    
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
        height : '90%',
        width : 120,
        backgroundColor : '#fff',
        margin : 5,
        padding:5,
        elevation : 5,
        borderRadius: 5 
    },
})


export default Menu
